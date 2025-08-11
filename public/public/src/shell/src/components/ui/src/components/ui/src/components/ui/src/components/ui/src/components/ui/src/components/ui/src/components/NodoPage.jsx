import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { 
  ArrowLeft, ArrowRight, BookOpen, Lightbulb, MessageCircle, 
  Target, CheckCircle, Link, Star
} from 'lucide-react'

const NodoPage = ({ nodo, etapa, onNavigate, onUpdateProgress }) => {
  const [seccionActual, setSeccionActual] = useState('activacion')
  const [reflexiones, setReflexiones] = useState({
    principal: '',
    profundizacion: ['', '', ''],
    personal: ''
  })
  const [verificaciones, setVerificaciones] = useState(
    (nodo.accion?.verificacion || []).map(() => false)
  )
  const [autoevaluacion, setAutoevaluacion] = useState(0)

  const secciones = [
    { id: 'activacion', titulo: 'Activación', icon: Lightbulb },
    { id: 'contenido', titulo: 'Contenido', icon: BookOpen },
    { id: 'ejemplos', titulo: 'Ejemplos', icon: Target },
    { id: 'reflexion', titulo: 'Reflexión', icon: MessageCircle },
    { id: 'accion', titulo: 'Acción', icon: CheckCircle },
    { id: 'verificacion', titulo: 'Verificación', icon: Star },
    { id: 'conexiones', titulo: 'Conexiones', icon: Link }
  ]

  const handleReflexionChange = (tipo, index, valor) => {
    if (tipo === 'profundizacion') {
      const nuevas = [...reflexiones.profundizacion]
      nuevas[index] = valor
      setReflexiones({ ...reflexiones, profundizacion: nuevas })
    } else {
      setReflexiones({ ...reflexiones, [tipo]: valor })
    }
  }

  const handleVerificacionChange = (index, checked) => {
    const nuevas = [...verificaciones]
    nuevas[index] = checked
    setVerificaciones(nuevas)
  }

  const calcularProgreso = () => {
    const completas = secciones.filter((s) => {
      switch (s.id) {
        case 'reflexion':
          return reflexiones.principal.length > 50 && reflexiones.personal.length > 50
        case 'verificacion':
          return verificaciones.filter(Boolean).length >= Math.ceil((verificaciones.length || 1) * 0.7)
        default:
          return seccionActual === s.id ||
            secciones.findIndex(x => x.id === seccionActual) >
            secciones.findIndex(x => x.id === s.id)
      }
    }).length
    return Math.round((completas / secciones.length) * 100)
  }

  useEffect(() => {
    const progreso = calcularProgreso()
    onUpdateProgress?.(nodo.id, progreso)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seccionActual, reflexiones, verificaciones, autoevaluacion])

  const renderSeccion = () => {
    switch (seccionActual) {
      case 'activacion':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Activación Experiencial</CardTitle>
                  <CardDescription>Conecta con tu experiencia personal</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {nodo.activacion}
                </p>
              </div>
              <div className="mt-6 text-center">
                <Button 
                  onClick={() => setSeccionActual('contenido')}
                  className="bg-orange-500 hover:bg-orange-600 rounded-full px-8"
                >
                  Continuar al Contenido
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'contenido':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Marco Teórico</CardTitle>
                  <CardDescription>Fundamentos conceptuales del tema</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                {(nodo.contenido || '').split('\n\n').map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('activacion')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button onClick={() => setSeccionActual('ejemplos')} className="bg-purple-500 hover:bg-purple-600 rounded-full px-8">
                  Ver Ejemplos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'ejemplos':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Ejemplos Prácticos</CardTitle>
                  <CardDescription>Aplicaciones concretas del concepto</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {(nodo.ejemplos || []).map((ejemplo, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{ejemplo}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('contenido')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button onClick={() => setSeccionActual('reflexion')} className="bg-blue-500 hover:bg-blue-600 rounded-full px-8">
                  Reflexionar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'reflexion':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Reflexión Guiada</CardTitle>
                  <CardDescription>Conecta el aprendizaje con tu experiencia</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pregunta Principal</label>
                <p className="text-gray-600 mb-3">{nodo.reflexion?.principal}</p>
                <Textarea
                  placeholder="Escribe tu reflexión aquí..."
                  value={reflexiones.principal}
                  onChange={(e) => handleReflexionChange('principal', null, e.target.value)}
                  className="min-h-[100px] rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preguntas de Profundización</label>
                {(nodo.reflexion?.profundizacion || []).map((pregunta, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-600 mb-2">{pregunta}</p>
                    <Textarea
                      placeholder="Tu respuesta..."
                      value={reflexiones.profundizacion[index] || ''}
                      onChange={(e) => handleReflexionChange('profundizacion', index, e.target.value)}
                      className="min-h-[80px] rounded-xl"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Conexión Personal</label>
                <p className="text-gray-600 mb-3">{nodo.reflexion?.personal}</p>
                <Textarea
                  placeholder="Comparte tu experiencia personal..."
                  value={reflexiones.personal}
                  onChange={(e) => handleReflexionChange('personal', null, e.target.value)}
                  className="min-h-[100px] rounded-xl"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('ejemplos')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={() => setSeccionActual('accion')}
                  className="bg-indigo-500 hover:bg-indigo-600 rounded-full px-8"
                  disabled={reflexiones.principal.length < 50 || reflexiones.personal.length < 50}
                >
                  Pasar a la Acción
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'accion':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">{nodo.accion?.titulo}</CardTitle>
                  <CardDescription>{nodo.accion?.descripcion}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Pasos a seguir:</h4>
                {(nodo.accion?.pasos || []).map((paso, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{paso}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('reflexion')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button onClick={() => setSeccionActual('verificacion')} className="bg-green-500 hover:bg-green-600 rounded-full px-8">
                  Verificar Progreso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'verificacion':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Verificación y Autoevaluación</CardTitle>
                  <CardDescription>Confirma tu progreso y aprendizaje</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Checklist de Verificación:</h4>
                <div className="space-y-3">
                  {(nodo.accion?.verificacion || []).map((item, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox
                        id={`verificacion-${index}`}
                        checked={!!verificaciones[index]}
                        onCheckedChange={(checked) => handleVerificacionChange(index, checked)}
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autoevaluación: ¿Qué tan bien dominas este concepto? (1-5)
                </label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map((v) => (
                    <Button
                      key={v}
                      variant={autoevaluacion === v ? 'default' : 'outline'}
                      onClick={() => setAutoevaluacion(v)}
                      className="w-12 h-12 rounded-full"
                    >
                      {v}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('accion')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={() => setSeccionActual('conexiones')}
                  className="bg-yellow-500 hover:bg-yellow-600 rounded-full px-8"
                  disabled={verificaciones.filter(Boolean).length < Math.ceil((verificaciones.length || 1) * 0.7)}
                >
                  Ver Conexiones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case 'conexiones':
        return (
          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                  <Link className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Conexiones y Aplicaciones</CardTitle>
                  <CardDescription>Cómo se relaciona con otros conceptos</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(nodo.conexiones || []).map((c, i) => (
                  <div key={i} className="p-4 bg-violet-50 rounded-xl">
                    <p className="text-gray-700">{c}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setSeccionActual('verificacion')} className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button onClick={() => onNavigate('etapa', etapa.id)} className="bg-violet-500 hover:bg-violet-600 rounded-full px-8">
                  Completar Nodo
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => onNavigate('etapa', etapa.id)} className="rounded-full">
              ← Volver a {etapa.titulo}
            </Button>
            <div className="text-right">
              <p className="text-sm text-gray-500">Progreso del Nodo</p>
              <p className="text-lg font-semibold text-gray-900">{calcularProgreso()}%</p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{nodo.titulo}</h1>
            <p className="text-gray-600">{etapa.titulo}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {secciones.map((s) => {
              const Icon = s.icon
              const isActive = seccionActual === s.id
              const isCompleted = secciones.findIndex(x => x.id === seccionActual) > secciones.findIndex(x => x.id === s.id)
              return (
                <Button
                  key={s.id}
                  variant={isActive ? 'default' : 'outline'}
                  onClick={() => setSeccionActual(s.id)}
                  className={`rounded-full ${isCompleted ? 'bg-green-100 border-green-300' : ''}`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {s.titulo}
                  {isCompleted && <CheckCircle className="h-4 w-4 ml-2 text-green-600" />}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {renderSeccion()}
      </div>
    </div>
  )
}

export default NodoPage
