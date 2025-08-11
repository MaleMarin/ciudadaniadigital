import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Brain, 
  Users, 
  Shield, 
  Scale, 
  Settings, 
  Rocket,
  Star,
  ChevronRight,
  BookOpen,
  Target,
  Award
} from 'lucide-react'
import NodoPage from './components/NodoPage.jsx'
import { etapasData } from './data/contenido.js'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('landing')
  const [currentEtapa, setCurrentEtapa] = useState(null)
  const [currentNodo, setCurrentNodo] = useState(null)
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('ciudadania-digital-progress')
    return saved ? JSON.parse(saved) : {
      etapa1: 0,
      etapa2: 0,
      etapa3: 0,
      etapa4: 0,
      etapa5: 0,
      etapa6: 0,
      totalProgress: 0,
      nodosCompletados: {}
    }
  })

  useEffect(() => {
    localStorage.setItem('ciudadania-digital-progress', JSON.stringify(userProgress))
  }, [userProgress])

  const etapas = [
    {
      id: 'etapa1',
      titulo: 'Fortalece tu Criterio',
      descripcion: 'Desarrolla pensamiento crítico y habilidades de evaluación de información',
      icon: Brain,
      color: 'bg-orange-500',
      nodos: 6,
      reconocimiento: '🧠 Pensador Crítico'
    },
    {
      id: 'etapa2',
      titulo: 'Conecta con Sentido',
      descripcion: 'Aprende a comunicarte y colaborar de manera constructiva online',
      icon: Users,
      color: 'bg-purple-500',
      nodos: 6,
      reconocimiento: '🤝 Constructor de Puentes'
    },
    {
      id: 'etapa3',
      titulo: 'Identifica Riesgos',
      descripcion: 'Reconoce y navega los desafíos del mundo digital',
      icon: Shield,
      color: 'bg-blue-500',
      nodos: 6,
      reconocimiento: '🔍 Detective Digital'
    },
    {
      id: 'etapa4',
      titulo: 'Derechos Digitales',
      descripcion: 'Conoce y defiende tus derechos en el mundo digital',
      icon: Scale,
      color: 'bg-indigo-500',
      nodos: 6,
      reconocimiento: '⚖️ Defensor de Derechos'
    },
    {
      id: 'etapa5',
      titulo: 'Adapta la Tecnología a Ti',
      descripcion: 'Toma control consciente de tu relación con la tecnología',
      icon: Settings,
      color: 'bg-violet-500',
      nodos: 6,
      reconocimiento: '🎛️ Maestro de la Adaptación'
    },
    {
      id: 'etapa6',
      titulo: 'Actúa con Sentido',
      descripcion: 'Conviértete en un protagonista digital que inspira cambio',
      icon: Rocket,
      color: 'bg-orange-600',
      nodos: 6,
      reconocimiento: '🚀 Protagonista Digital'
    }
  ]

  const handleNavigate = (view, id = null) => {
    setCurrentView(view)
    if (view === 'etapa') {
      setCurrentEtapa(id)
      setCurrentNodo(null)
    } else if (view === 'nodo') {
      setCurrentNodo(id)
    }
  }

  const handleUpdateProgress = (nodoId, progreso) => {
    setUserProgress(prev => {
      const newProgress = {
        ...prev,
        nodosCompletados: {
          ...prev.nodosCompletados,
          [nodoId]: progreso
        }
      }
      
      // Calcular progreso por etapa
      const etapaId = nodoId.substring(0, 6) // 'nodo1' -> 'etapa1' (ajusta si tu id cambia)
      const nodosEtapa = Object.keys(newProgress.nodosCompletados)
        .filter(id => id.startsWith(etapaId.replace('nodo', 'nodo')))
      const progresoEtapa = nodosEtapa.length > 0 
        ? nodosEtapa.reduce((sum, id) => sum + (newProgress.nodosCompletados[id] || 0), 0) / nodosEtapa.length
        : 0
      
      newProgress[etapaId] = Math.round(progresoEtapa)
      
      // Calcular progreso total
      const totalEtapas = Object.keys(newProgress).filter(key => key.startsWith('etapa')).length
      const progresoTotal = Object.keys(newProgress)
        .filter(key => key.startsWith('etapa'))
        .reduce((sum, key) => sum + newProgress[key], 0) / totalEtapas
      
      newProgress.totalProgress = Math.round(progresoTotal)
      
      return newProgress
    })
  }

  // LANDING PAGE COMPONENT
  const LandingPage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ciudadanía Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                {" "}Consciente
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Un programa integral para desarrollar las habilidades, conocimientos y valores 
              necesarios para participar de manera consciente, crítica y constructiva en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3"
                onClick={() => setCurrentView('dashboard')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Comenzar mi Viaje
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 border-purple-300 text-purple-600 hover:bg-purple-50"
                onClick={() => handleNavigate('etapa', 'etapa1')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Contenido
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tu Viaje de Transformación Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              36 nodos de aprendizaje organizados en 6 etapas progresivas que te llevarán 
              desde el pensamiento crítico hasta el protagonismo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etapas.map((etapa, index) => {
              const IconComponent = etapa.icon
              return (
                <Card key={etapa.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 rounded-2xl cursor-pointer"
                      onClick={() => handleNavigate('etapa', etapa.id)}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${etapa.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Etapa {index + 1}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">
                      {etapa.titulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      {etapa.descripcion}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Target className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-500">{etapa.nodos} nodos de aprendizaje</span>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 rounded-full">
                      {etapa.reconocimiento}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué es importante?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En un mundo cada vez más digital, necesitamos ciudadanos conscientes 
              que puedan navegar, evaluar y contribuir positivamente al ecosistema digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pensamiento Crítico</h3>
              <p className="text-gray-600">
                Desarrolla habilidades para evaluar información, detectar sesgos y tomar decisiones informadas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protección Digital</h3>
              <p className="text-gray-600">
                Aprende a proteger tu privacidad, seguridad y derechos en el mundo digital.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protagonismo</h3>
              <p className="text-gray-600">
                Conviértete en un agente de cambio positivo en tu comunidad digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya están construyendo un mundo digital más consciente y justo.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold"
            onClick={() => setCurrentView('dashboard')}
          >
            <Star className="mr-2 h-5 w-5" />
            Comenzar Ahora
          </Button>
        </div>
      </section>
    </div>
  )

  // DASHBOARD COMPONENT
  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Ciudadanía Digital</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setCurrentView('landing')}
              className="rounded-full"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Tu Progreso General</CardTitle>
            <CardDescriptio
