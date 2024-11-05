import React from 'react'

export type HexCode = number | `#${string}`

class Color {
  private r: number
  private g: number
  private b: number
  private a: number

  constructor(r: number, g: number, b: number, a: number = 1) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  getOpacity(): number {
    return this.a
  }

  setOpacity(a: number): void {
    this.a = a
  }

  getColor(): { r: number; g: number; b: number; a: number } {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
    }
  }

  setColor(color: { r: number; g: number; b: number; a: number }): void {
    this.r = color.r
    this.g = color.g
    this.b = color.b
    this.a = color.a
  }

  static HSL(h: number, s: number, l: number, a: number = 1): Color {
    // Convert HSL to RGB (basic formula)
    let c = (1 - Math.abs(2 * l - 1)) * s
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    let m = l - c / 2

    let [r, g, b] = (() => {
      if (h < 60) return [c, x, 0]
      if (h < 120) return [x, c, 0]
      if (h < 180) return [0, c, x]
      if (h < 240) return [0, x, c]
      if (h < 300) return [x, 0, c]
      return [c, 0, x]
    })()

    // Adjust to 0-255 scale and return a new Color
    return new Color(
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255),
      a,
    )
  }

  static RGB(r: number, g: number, b: number, a: number = 1): Color {
    return new Color(r, g, b, a)
  }

  static HEX(code: HexCode): Color {
    let hexString =
      typeof code === 'number'
        ? code.toString(16).padStart(6, '0')
        : code.slice(1)
    let r = parseInt(hexString.substring(0, 2), 16)
    let g = parseInt(hexString.substring(2, 4), 16)
    let b = parseInt(hexString.substring(4, 6), 16)
    return new Color(r, g, b, 1)
  }
}

export default Color
