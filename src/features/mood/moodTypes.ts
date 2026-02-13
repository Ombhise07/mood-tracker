// It is a way to define set of named constants
enum Mood{
    Happy = "HAPPY",
    Sad = "SAD",
    Angry = "ANGRY",
    Excited = "EXCITED",
    Calm = "CALM",
}

export interface MoodEntry {
    id: string;
    date: string;
    mood: Mood;
    vibe: string;
}