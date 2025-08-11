// src/data/contenido.js
export const etapasData = {
  etapa1: {
    id: 'etapa1',
    titulo: 'Fortalece tu Criterio',
    descripcion: 'Desarrolla pensamiento crítico y habilidades de evaluación de información',
    objetivo: 'Desarrollar las habilidades fundamentales para evaluar información, pensar críticamente, y usar la tecnología de manera reflexiva. Al completar esta etapa, tendrás las bases sólidas para navegar el mundo digital con criterio propio.',
    reconocimiento: '🧠 Pensador Crítico',
    nodos: [
      {
        id: 'nodo1',
        titulo: 'Atención Consciente',
        activacion: 'Piensa en la última vez que revisaste tu teléfono. ¿Fue una decisión consciente o un impulso automático? ¿Cuántas veces al día crees que tocas tu dispositivo sin una intención específica? ¿Qué pasaría si cada vez que fueras a usar tecnología te preguntaras: "¿Por qué estoy haciendo esto ahora?"',
        contenido: `La atención consciente en el mundo digital es la capacidad de usar la tecnología de manera intencional, en lugar de ser usado por ella. En un entorno diseñado para capturar y mantener nuestra atención, desarrollar consciencia sobre cuándo, cómo y por qué usamos dispositivos digitales se convierte en una habilidad fundamental.

La tecnología moderna está diseñada para crear hábitos automáticos: notificaciones que interrumpen, feeds infinitos que nos mantienen desplazándonos, y algoritmos que predicen lo que queremos ver antes de que lo sepamos nosotros mismos. Sin atención consciente, podemos pasar horas online sin recordar qué hicimos o por qué.

La atención consciente no significa rechazar la tecnología, sino desarrollar una relación más intencional con ella. Implica pausar antes de actuar, preguntarse sobre las motivaciones, y elegir conscientemente cómo invertir uno de nuestros recursos más valiosos: nuestra atención.`,
        ejemplos: [
          'Pausar 3 segundos antes de abrir una app para preguntarse "¿qué busco lograr?"',
          'Configurar horarios específicos para revisar redes sociales en lugar de hacerlo constantemente',
          'Usar el modo "no molestar" durante actividades que requieren concentración',
          'Practicar la "respiración digital": tomar una respiración profunda antes de responder a mensajes emocionales',
          'Crear rituales de "desconexión" al final del día para separar tiempo digital de tiempo personal'
        ],
        reflexion: {
          principal: '¿En qué momentos del día sientes que usas la tecnología de manera más automática o inconsciente?',
          profundizacion: [
            '¿Cómo te sientes después de pasar mucho tiempo en redes sociales o navegando sin propósito?',
            '¿Qué actividades offline disfrutas más y cómo podrías proteger ese tiempo?',
            '¿Qué señales físicas o emocionales te indican que necesitas un descanso de la tecnología?'
          ],
          personal: 'Describe un momento reciente donde te diste cuenta de que habías estado usando un dispositivo sin realmente prestar atención a lo que hacías.'
        },
        accion: {
          titulo: 'Experimento de Atención Digital',
          descripcion: 'Durante una semana, practica la atención consciente en tu uso de tecnología.',
          pasos: [
            'Día 1-2: Observación sin juicio. Simplemente nota cuándo usas dispositivos sin intención específica.',
            'Día 3-4: Implementa la "pausa de 3 segundos" antes de abrir cualquier app.',
            'Día 5-6: Establece 2 períodos del día completamente libres de dispositivos (ej: primera hora de la mañana, última hora antes de dormir).',
            'Día 7: Reflexiona sobre los cambios que notaste en tu bienestar y productividad.'
          ],
          verificacion: [
            'He observado mis patrones de uso tecnológico sin juzgarme',
            'He practicado la pausa consciente antes de usar dispositivos',
            'He establecido y respetado períodos libres de tecnología',
            'He reflexionado sobre cómo estos cambios afectaron mi bienestar'
          ]
        },
        conexiones: [
          'Con Nodo 5 (Pensamiento Crítico): La atención consciente es prerequisito para evaluar información críticamente',
          'Con Nodo 33 (Resiliencia Digital): La consciencia te ayuda a proteger tu bienestar mental',
          'Con Etapa 5: Esta base de consciencia será clave para adaptar la tecnología a tus necesidades'
        ]
      },
      // … los nodos 2-6 tal como los compartiste (abreviados aquí por espacio) …
      {
        id: 'nodo2',
        titulo: 'Información de Calidad',
        activacion: 'Imagina que necesitas tomar una decisión importante sobre tu salud basándote en información que encuentras online. ¿Cómo decides en qué fuentes confiar?',
        contenido: 'En la era de la sobrecarga informativa, la habilidad para identificar información de calidad se ha vuelto tan importante como saber leer...',
        ejemplos: [
          'Verificar la fecha de publicación de artículos sobre temas que cambian rápidamente',
          'Buscar el "Acerca de" o "About" de un sitio web para entender quién está detrás de la información',
          'Contrastar información importante en al menos 3 fuentes independientes'
        ],
        reflexion: {
          principal: '¿Qué criterios usas actualmente para decidir si una información es confiable?',
          profundizacion: [
            '¿Alguna vez has compartido información que después descubriste que era incorrecta?',
            '¿Cómo reaccionas cuando encuentras información que contradice tus creencias?'
          ],
          personal: 'Describe una situación donde información de mala calidad te llevó a tomar una decisión equivocada.'
        },
        accion: {
          titulo: 'Auditoría de Fuentes de Información',
          descripcion: 'Evalúa y mejora la calidad de tus fuentes de información habituales.',
          pasos: [
            'Lista tus 10 fuentes principales de noticias e información',
            'Para cada fuente, investiga: ¿Quién la financia? ¿Cuál es su metodología?',
            'Clasifica cada fuente como: Alta calidad, Calidad media, Baja calidad'
          ],
          verificacion: [
            'He auditado mis fuentes principales de información',
            'He investigado la credibilidad y sesgos de mis fuentes',
            'He eliminado o reducido fuentes de baja calidad'
          ]
        },
        conexiones: [
          'Con Nodo 1 (Atención Consciente): Necesitas atención para evaluar información críticamente',
          'Con Nodo 3 (Curiosidad Dirigida): La curiosidad te motiva a buscar fuentes de calidad'
        ]
      }
    ]
  },
  // Etapas 2–6 (resumen como en tu fuente original) …
  etapa2: { id: 'etapa2', titulo: 'Conecta con Sentido', descripcion: 'Aprende a comunicarte y colaborar de manera constructiva online', objetivo: 'Desarrollar habilidades sociales digitales para construir relaciones auténticas y colaborar efectivamente en espacios virtuales.', reconocimiento: '🤝 Constructor de Puentes', nodos: [
    { id: 'nodo7', titulo: 'Comunicación Auténtica', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo8', titulo: 'Colaboración Constructiva', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo9', titulo: 'Construcción de Confianza', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo10', titulo: 'Diversidad de Perspectivas', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo11', titulo: 'Consenso de Calidad', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo12', titulo: 'Navegación Anti-Polarización', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] }
  ]},
  etapa3: { id: 'etapa3', titulo: 'Identifica Riesgos', descripcion: 'Reconoce y navega los desafíos del mundo digital', objetivo: 'Desarrollar consciencia sobre los riesgos digitales y estrategias para protegerte y proteger a otros.', reconocimiento: '🔍 Detective Digital', nodos: [
    { id: 'nodo13', titulo: 'Consciencia de Cultura Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo14', titulo: 'Identidad Integrada', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo15', titulo: 'Desigualdad Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo16', titulo: 'Estereotipos Algorítmicos', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo17', titulo: 'Discriminación Automatizada', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo18', titulo: 'Escape de Burbujas Informativas', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] }
  ]},
  etapa4: { id: 'etapa4', titulo: 'Derechos Digitales', descripcion: 'Conoce y defiende tus derechos en el mundo digital', objetivo: 'Comprender tus derechos digitales y desarrollar habilidades para ejercerlos y defenderlos.', reconocimiento: '⚖️ Defensor de Derechos', nodos: [
    { id: 'nodo19', titulo: 'Justicia Tecnológica', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo20', titulo: 'Conocimiento de Derechos', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo21', titulo: 'Equilibrio Libertad-Responsabilidad', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo22', titulo: 'Exigencia de Accountability', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo23', titulo: 'Participación Ciudadana Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo24', titulo: 'Defensa del Bien Común', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] }
  ]},
  etapa5: { id: 'etapa5', titulo: 'Adapta la Tecnología a Ti', descripcion: 'Toma control consciente de tu relación con la tecnología', objetivo: 'Desarrollar estrategias para personalizar y controlar tu experiencia tecnológica según tus valores y objetivos.', reconocimiento: '🎛️ Maestro de la Adaptación', nodos: [
    { id: 'nodo25', titulo: 'Personalización Consciente', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo26', titulo: 'Límites Digitales', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo27', titulo: 'Optimización de Herramientas', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo28', titulo: 'Gestión de Datos Personales', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo29', titulo: 'Ecosistema Digital Personal', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo30', titulo: 'Evolución Tecnológica Personal', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] }
  ]},
  etapa6: { id: 'etapa6', titulo: 'Actúa con Sentido', descripcion: 'Conviértete en un protagonista digital que inspira cambio', objetivo: 'Desarrollar la capacidad de liderar y crear impacto positivo en tu comunidad digital y más allá.', reconocimiento: '🚀 Protagonista Digital', nodos: [
    { id: 'nodo31', titulo: 'Liderazgo Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo32', titulo: 'Creación de Valor', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo33', titulo: 'Resiliencia Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo34', titulo: 'Innovación Responsable', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo35', titulo: 'Impacto Sostenible', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] },
    { id: 'nodo36', titulo: 'Legado Digital', activacion: '...', contenido: '...', ejemplos: [], reflexion: {}, accion: {}, conexiones: [] }
  ]}
}
