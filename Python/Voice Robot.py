import speech_recognition as sr
from gtts import gTTS 
import os
voice =''
while True:
    e = sr.Recognizer()
    with sr.Microphone() as source:
        try:
            audio = e.listen(source)
            texto = e.recognize_google(audio)
            print(texto)
            if texto == 'stop':
                break
            texto = e.recognize_google(audio)
            voice = voice+str(texto)
        
        except:
            print('Fale algo.')
we = gTTS(texto=voice,lang='pt',slow=False)
we.save('A.wav')
