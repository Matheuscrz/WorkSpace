import pafy
video = pafy.new(input('Digite a url do video: '))
audio = video.getbestaudio()
audio.download()