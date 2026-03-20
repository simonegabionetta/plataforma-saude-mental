import { useState, useRef } from 'react' //useState: guarda valor para atualizar tela //use Ref refrenecia elem HTML sem atualizar
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, PhoneOff, Mic, MicOff, Video, VideoOff } from 'lucide-react'

function Home() {
  const [isCallActive, setIsCallActive] = useState(false)//estado video chamada
  const [isMuted, setIsMuted] = useState(false) // estado microfone
  const [isVideoOn, setIsVideoOn] = useState(true) //estado da camera
  const [transcription, setTranscription] = useState('') // text transcrição
  const videoRef = useRef<HTMLVideoElement>(null) // guardar ref ligar e desl camera depois
  const mediaStreamRef = useRef<MediaStream | null>(null)

  const startCall = async () => { // função async pq espera navegador acessar camera
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ //permisao ao nav acessar camera e mic
        video: true, //conecta video na tela
        audio: true,
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      mediaStreamRef.current = stream
      setIsCallActive(true)
    } catch (error) {
      console.error('Erro ao iniciar chamada:', error)
    }
  }

  const endCall = () => {
    if (mediaStreamRef.current) {  //pega trilha video + audio
      mediaStreamRef.current.getTracks().forEach((track) => track.stop()) //para cada trilha desliga 
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null //remove video tela
    }
    setIsCallActive(false) //volta estado inicial
    setIsMuted(false) //reseta mic ligado
    setIsVideoOn(true) //resenta cam ligada
  }

  const toggleMute = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getAudioTracks().forEach((track) => { //pega audio
        track.enabled = !track.enabled //inverte estado da trilha ligado/desligado
      })
    }
    setIsMuted(!isMuted)//inverte o estado do botão na tela mutou/desmutou
  }

  const toggleVideo = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getVideoTracks().forEach((track) => { //pega videos
        track.enabled = !track.enabled //inverte estado video
      })
    }
    setIsVideoOn(!isVideoOn)
  }

  return (
    <div className="p-6 flex flex-col gap-6">

      <div>
        <h1 className="text-2xl font-bold">Olá, Usuário! 👋</h1>
        <p className="text-gray-500">Bem-vindo à sua plataforma de saúde mental</p>
      </div>

      <div className="flex gap-6">

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Videochamada</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center relative">
              {isCallActive ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-400">Câmera desligada</span>
              )}
            </div>

            <div className="flex items-center justify-center gap-4">
              {!isCallActive ? (
                <Button onClick={startCall} className="bg-green-600 hover:bg-green-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Iniciar Chamada
                </Button>
              ) : (
                <>
                  <Button onClick={toggleMute} variant="outline">
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button onClick={toggleVideo} variant="outline">
                    {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                  </Button>
                  <Button onClick={endCall} variant="destructive">
                    <PhoneOff className="w-4 h-4 mr-2" />
                    Encerrar
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Transcrição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 border rounded-lg p-4 overflow-y-auto">
              {transcription ? (
                <p>{transcription}</p>
              ) : (
                <p className="text-gray-400">
                  A transcrição aparecerá aqui durante a chamada...
                </p>
              )}
            </div>
          </CardContent>
        </Card>

      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pacientes Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Nenhum paciente cadastrado ainda.</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default Home