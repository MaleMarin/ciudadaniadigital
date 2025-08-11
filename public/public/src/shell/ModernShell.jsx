// src/shell/ModernShell.jsx
import React, { useEffect, useRef } from 'react'

export default function ModernShell({ children }) {
  const canvasRef = useRef(null)
  const labelsRootRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const labelsRoot = labelsRootRef.current

    // ====== CONSTS (misma estética que el prototipo) ======
    const SPHERE_RADIUS = 80
    const FILLER_COUNT = 240
    const DIMENSIONS = [
      { title: 'Fortalece tu Criterio', color: '#14b8a6' },
      { title: 'Conecta con Sentido', color: '#f97316' },
      { title: 'Identifica Riesgos', color: '#3b82f6' },
      { title: 'Derechos Digitales', color: '#ec4899' },
      { title: 'Adapta la Tecnología a Ti', color: '#eab308' },
      { title: 'Actúa con Información', color: '#8b5cf6' }
    ]
    const FILLER_COLORS = [
      '#f5b5b4', '#f2a5a4', '#efcfce', '#f8dedd',
      '#ffe4cc', '#ffd9b3', '#ffecdb', '#fff1e6',
      '#d1e7f5', '#c2ddf2', '#e8f3f9', '#f0f7fc',
      '#d5f0e3', '#c8ebdb', '#e6f6ed', '#f2faf6'
    ]

    // ====== STATE ======
    let spheres = []
    let fillers = []
    let hovered = -1
    const mouse = { x: 0, y: 0, inside: false }
    const followPoint = { x: 0, y: 0 }

    // ====== HELPERS ======
    const rand = (a, b) => Math.random() * (b - a) + a
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const lighten = (hex, amount) => {
      const h = hex.replace('#', '')
      const r = Math.min(255, parseInt(h.substr(0, 2), 16) + amount * 255)
      const g = Math.min(255, parseInt(h.substr(2, 2), 16) + amount * 255)
      const b = Math.min(255, parseInt(h.substr(4, 2), 16) + amount * 255)
      return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`
    }
    const darken = (hex, amount) => {
      const h = hex.replace('#', '')
      const r = Math.max(0, parseInt(h.substr(0, 2), 16) - amount * 255)
      const g = Math.max(0, parseInt(h.substr(2, 2), 16) - amount * 255)
      const b = Math.max(0, parseInt(h.substr(4, 2), 16) - amount * 255)
      return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      followPoint.x = rect.width / 2
      followPoint.y = rect.height / 2
      initScene()
    }

    function initScene() {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)

      spheres = []
      fillers = []
      labelsRoot.innerHTML = ''

      const margin = SPHERE_RADIUS + 20
      const safeW = w - margin * 2
      const safeH = h - margin * 2

      const positions = [
        { x: margin + safeW * 0.15, y: margin + safeH * 0.15 },
        { x: margin + safeW * 0.85, y: margin + safeH * 0.15 },
        { x: margin + safeW * 0.05, y: margin + safeH * 0.50 },
        { x: margin + safeW * 0.95, y: margin + safeH * 0.50 },
        { x: margin + safeW * 0.25, y: margin + safeH * 0.85 },
        { x: margin + safeW * 0.75, y: margin + safeH * 0.85 }
      ]

      DIMENSIONS.forEach((dim, i) => {
        const pos = positions[i]
        const sphere = {
          x: pos.x,
          y: pos.y,
          targetX: pos.x,
          targetY: pos.y,
          r: SPHERE_RADIUS,
          color: dim.color,
          title: dim.title,
          vx: 0, vy: 0,
          isHovered: false,
          angle: rand(0, Math.PI * 2),
          jitter: rand(0.001, 0.003),
          wanderTimer: rand(60, 120),
          minX: margin, maxX: w - margin,
          minY: margin, maxY: h - margin
        }
        spheres.push(sphere)

        // label
        const label = document.createElement('div')
        label.textContent = dim.title
        label.className =
          'pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 ' +
          'bg-white/95 border border-[rgba(31,28,26,0.10)] shadow ' +
          'px-3 py-2 rounded-xl font-semibold text-[14px] ' +
          'text-[rgba(31,28,26,0.85)] whitespace-nowrap transition-opacity duration-300'
        label.style.opacity = 0
        label.id = `label-${i}`
        labelsRoot.appendChild(label)
      })

      for (let i = 0; i < FILLER_COUNT; i++) {
        fillers.push({
          x: rand(30, w - 30),
          y: rand(30, h - 30),
          r: rand(3, 8),
          color: pick(FILLER_COLORS),
          vx: rand(-0.5, 0.5),
          vy: rand(-0.5, 0.5),
          opacity: 0,
          targetOpacity: rand(0.3, 0.6),
          fadeSpeed: rand(0.01, 0.03)
        })
      }
    }

    function updateLabels() {
      spheres.forEach((s, i) => {
        const label = document.getElementById(`label-${i}`)
        if (!label) return
        if (s.isHovered) {
          label.style.left = `${s.x}px`
          label.style.top = `${s.y - s.r - 30}px`
          label.style.opacity = 1
        } else {
          label.style.opacity = 0
        }
      })
    }

    function checkHover() {
      let newHovered = -1
      spheres.forEach((s, i) => {
        const d = Math.hypot(mouse.x - s.x, mouse.y - s.y)
        if (d < s.r + 20 && newHovered === -1) newHovered = i
      })
      if (newHovered !== hovered) {
        hovered = newHovered
        spheres.forEach((s, i) => { s.isHovered = i === hovered })
        updateLabels()
      }
    }

    function step(dt) {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)

      const targetX = mouse.inside ? mouse.x : w / 2
      const targetY = mouse.inside ? mouse.y : h / 2
      const alpha = mouse.inside ? 0.15 : 0.05

      followPoint.x += (targetX - followPoint.x) * alpha
      followPoint.y += (targetY - followPoint.y) * alpha

      fillers.forEach(f => {
        if (f.opacity < f.targetOpacity) {
          f.opacity = Math.min(f.targetOpacity, f.opacity + f.fadeSpeed * dt)
        }
        const dx = followPoint.x - f.x
        const dy = followPoint.y - f.y
        const dist = Math.hypot(dx, dy) + 0.001
        let followStrength = mouse.inside ? 0.15 : 0.05
        if (dist < 200) followStrength *= Math.max(0.6, dist / 200)
        else if (dist > 300) followStrength *= 2.0
        const force = Math.min(0.4, 250 / dist)

        f.vx += (dx / dist) * force * followStrength * dt
        f.vy += (dy / dist) * force * followStrength * dt
        f.vx += (Math.random() - 0.5) * 0.02 * dt
        f.vy += (Math.random() - 0.5) * 0.02 * dt
        f.vx *= 0.97
        f.vy *= 0.97
        f.x += f.vx * dt * 2.5
        f.y += f.vy * dt * 2.5

        if (f.x < f.r) { f.x = f.r; f.vx *= -0.4 }
        if (f.x > w - f.r) { f.x = w - f.r; f.vx *= -0.4 }
        if (f.y < f.r) { f.y = f.r; f.vy *= -0.4 }
        if (f.y > h - f.r) { f.y = h - f.r; f.vy *= -0.4 }
      })

      spheres.forEach(s => {
        s.wanderTimer -= dt
        if (s.wanderTimer <= 0) {
          const angle = rand(0, Math.PI * 2)
          const distance = rand(10, 30)
          s.targetX = Math.max(s.minX, Math.min(s.maxX, s.x + Math.cos(angle) * distance))
          s.targetY = Math.max(s.minY, Math.min(s.maxY, s.y + Math.sin(angle) * distance))
          s.wanderTimer = rand(60, 120)
        }

        const dx = s.targetX - s.x
        const dy = s.targetY - s.y
        s.vx += dx * 0.001 * dt
        s.vy += dy * 0.001 * dt

        s.angle += s.jitter * dt
        s.vx += Math.cos(s.angle) * 0.01 * dt
        s.vy += Math.sin(s.angle) * 0.01 * dt

        if (s.isHovered) {
          const mdx = mouse.x - s.x
          const mdy = mouse.y - s.y
          s.vx += mdx * 0.001 * dt
          s.vy += mdy * 0.001 * dt
        }

        s.vx *= 0.95
        s.vy *= 0.95
        s.x += s.vx * dt
        s.y += s.vy * dt

        if (s.x < s.minX) { s.x = s.minX; s.vx = Math.abs(s.vx) * 0.3 }
        if (s.x > s.maxX) { s.x = s.maxX; s.vx = -Math.abs(s.vx) * 0.3 }
        if (s.y < s.minY) { s.y = s.minY; s.vy = Math.abs(s.vy) * 0.3 }
        if (s.y > s.maxY) { s.y = s.maxY; s.vy = -Math.abs(s.vy) * 0.3 }
      })

      // separación suave entre esferas
      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          const a = spheres[i], b = spheres[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.hypot(dx, dy)
          const minDistance = a.r + b.r + 40
          if (dist > 0 && dist < minDistance) {
            const overlap = minDistance - dist
            const sep = overlap * 0.02
            const ux = dx / dist, uy = dy / dist
            a.vx -= ux * sep * dt; a.vy -= uy * sep * dt
            b.vx += ux * sep * dt; b.vy += uy * sep * dt
            const push = overlap * 0.5
            a.x -= ux * push; a.y -= uy * push
            b.x += ux * push; b.y += uy * push
          }
        }
      }

      updateLabels()
    }

    function draw() {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, w, h)

      fillers.forEach(f => {
