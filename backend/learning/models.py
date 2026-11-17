from django.db import models
from django.contrib.auth.models import User


class Topic(models.Model):
    name = models.CharField(max_length=150)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class GrammarTopic(Topic):
    rule_name = models.CharField(max_length=150)
    structure_formulta = models.CharField(max_length=255)


class VocabularyTopic(Topic):
    word = models.CharField(max_length=100)
    definition = models.TextField()
    example_sentence = models.TextField()


class Language(models.Model):
    name = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class Level(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    description = models.TextField()
    display_order = models.IntegerField(unique=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class Unit(models.Model):
    level = models.ForeignKey(Level, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    display_order = models.IntegerField(unique=True)
    objective = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class Lesson(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    display_order = models.IntegerField(unique=True)
    objective = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class RoleplayScenario(models.Model):
    title = models.CharField(max_length=150)
    character_role = models.CharField(max_length=100)
    context = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class RoleplayLesson(Lesson):
    scenario = models.OneToOneField(RoleplayScenario, on_delete=models.CASCADE)
    topics = models.ManyToManyField(Topic)


class GrammarLesson(Lesson):
    topics = models.ManyToManyField(GrammarTopic)


class VocabularyLesson(Lesson):
    topics = models.ManyToManyField(VocabularyTopic)


class Exam(models.Model):
    max_score = models.IntegerField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class LessonExam(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    score = models.IntegerField()
    approved = models.BooleanField()


class DiagnosticExam(models.Model):
    learner = models.ForeignKey(User, on_delete=models.CASCADE)
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    level_assesed = models.CharField(max_length=10)


class Question(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    prompt_text = models.TextField()
    expected_answer = models.TextField()


class AIProvider(models.Model):
    name = models.CharField(max_length=100)


class AIConnection(models.Model):
    provider = models.ForeignKey(AIProvider, on_delete=models.CASCADE)
    learner = models.ForeignKey(User, on_delete=models.CASCADE)
    available_tokens = models.IntegerField()
    api_key = models.CharField(max_length=255)


class AIModel(models.Model):
    provider = models.ForeignKey(AIProvider, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    supported_languages = models.ManyToManyField(Language)


class LLM(AIModel):
    context_window = models.IntegerField()
    reasoning = models.BooleanField()
    parameters = models.CharField(max_length=100)


class TTS(AIModel):
    speaking_speed = models.IntegerField()


class Voice(models.Model):
    tts_model = models.ForeignKey(TTS, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quality = models.CharField(max_length=50)


class STT(AIModel):
    word_error_rate = models.IntegerField()
    character_error_rate = models.IntegerField()


class Session(models.Model):
    learner = models.ForeignKey(User, on_delete=models.CASCADE)
    finished = models.BooleanField()
    started_at = models.DateTimeField()
    completed_at = models.DateTimeField(null=True)


class FreeSession(Session):
    topics = models.ManyToManyField(Topic)


class PracticeSession(Session):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)


class ConversationTurn(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    created_at = models.DateTimeField()


class LearnerTurn(ConversationTurn):
    stt_model = models.ForeignKey(STT, on_delete=models.SET_NULL, null=True)
    transcription = models.TextField()


class AITurn(ConversationTurn):
    tts_model = models.ForeignKey(TTS, on_delete=models.SET_NULL, null=True)
    llm_model = models.ForeignKey(LLM, on_delete=models.SET_NULL, null=True)
    generated_text = models.TextField()
