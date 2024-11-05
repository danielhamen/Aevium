import { Registry } from "../Registry";

export namespace ColorRegistry {
  export const ColorRegistry = new Registry();

  export function register() {
    // Tailwind Red
    ColorRegistry.register("Red(50)", "hsl(0, 100%, 98%)"); // #fef2f2
    ColorRegistry.register("Red(100)", "hsl(0, 100%, 94%)"); // #fee2e2
    ColorRegistry.register("Red(200)", "hsl(0, 100%, 88%)"); // #fecaca
    ColorRegistry.register("Red(300)", "hsl(0, 100%, 80%)"); // #fca5a5
    ColorRegistry.register("Red(400)", "hsl(0, 100%, 68%)"); // #f87171
    ColorRegistry.register("Red(500)", "hsl(0, 87%, 58%)"); // #ef4444
    ColorRegistry.register("Red(600)", "hsl(0, 80%, 45%)"); // #dc2626
    ColorRegistry.register("Red(700)", "hsl(0, 80%, 34%)"); // #b91c1c
    ColorRegistry.register("Red(800)", "hsl(0, 70%, 27%)"); // #991b1b
    ColorRegistry.register("Red(900)", "hsl(0, 70%, 21%)"); // #7f1d1d
    ColorRegistry.register("Red(950)", "hsl(0, 70%, 9%)"); // #450a0a

    // Tailwind Orange
    ColorRegistry.register("Orange(50)", "hsl(30, 100%, 98%)"); // #fff7ed
    ColorRegistry.register("Orange(100)", "hsl(30, 100%, 94%)"); // #ffedd5
    ColorRegistry.register("Orange(200)", "hsl(30, 100%, 88%)"); // #fed7aa
    ColorRegistry.register("Orange(300)", "hsl(30, 100%, 80%)"); // #fdba74
    ColorRegistry.register("Orange(400)", "hsl(30, 100%, 68%)"); // #fb923c
    ColorRegistry.register("Orange(500)", "hsl(30, 80%, 58%)"); // #f97316
    ColorRegistry.register("Orange(600)", "hsl(30, 80%, 45%)"); // #ea580c
    ColorRegistry.register("Orange(700)", "hsl(30, 80%, 34%)"); // #c2410c
    ColorRegistry.register("Orange(800)", "hsl(30, 70%, 27%)"); // #9a3412
    ColorRegistry.register("Orange(900)", "hsl(30, 70%, 21%)"); // #7c2d12
    ColorRegistry.register("Orange(950)", "hsl(30, 70%, 9%)"); // #431407

    // Tailwind Amber
    ColorRegistry.register("Amber(50)", "hsl(45, 100%, 98%)"); // #fffbeb
    ColorRegistry.register("Amber(100)", "hsl(45, 100%, 93%)"); // #fef3c7
    ColorRegistry.register("Amber(200)", "hsl(45, 90%, 75%)"); // #fde68a
    ColorRegistry.register("Amber(300)", "hsl(45, 90%, 63%)"); // #fcd34d
    ColorRegistry.register("Amber(400)", "hsl(45, 90%, 54%)"); // #fbbf24
    ColorRegistry.register("Amber(500)", "hsl(45, 90%, 47%)"); // #f59e0b
    ColorRegistry.register("Amber(600)", "hsl(45, 90%, 40%)"); // #d97706
    ColorRegistry.register("Amber(700)", "hsl(45, 90%, 34%)"); // #b45309
    ColorRegistry.register("Amber(800)", "hsl(45, 90%, 29%)"); // #92400e
    ColorRegistry.register("Amber(900)", "hsl(45, 90%, 24%)"); // #78350f
    ColorRegistry.register("Amber(950)", "hsl(45, 90%, 13%)"); // #451a03

    // Tailwind Yellow
    ColorRegistry.register("Yellow(50)", "hsl(50, 100%, 96%)"); // #fefce8
    ColorRegistry.register("Yellow(100)", "hsl(52, 98%, 90%)"); // #fef9c3
    ColorRegistry.register("Yellow(200)", "hsl(50, 96%, 83%)"); // #fef08a
    ColorRegistry.register("Yellow(300)", "hsl(48, 96%, 72%)"); // #fde047
    ColorRegistry.register("Yellow(400)", "hsl(46, 96%, 62%)"); // #facc15
    ColorRegistry.register("Yellow(500)", "hsl(44, 93%, 53%)"); // #eab308
    ColorRegistry.register("Yellow(600)", "hsl(42, 88%, 48%)"); // #ca8a04
    ColorRegistry.register("Yellow(700)", "hsl(39, 82%, 42%)"); // #a16207
    ColorRegistry.register("Yellow(800)", "hsl(35, 75%, 35%)"); // #854d0e
    ColorRegistry.register("Yellow(900)", "hsl(31, 68%, 27%)"); // #713f12
    ColorRegistry.register("Yellow(950)", "hsl(30, 57%, 16%)"); // #422006

    // Tailwind Lime
    ColorRegistry.register("Lime(50)", "hsl(75, 100%, 98%)"); // #f7fee7
    ColorRegistry.register("Lime(100)", "hsl(75, 100%, 94%)"); // #ecfccb
    ColorRegistry.register("Lime(200)", "hsl(75, 100%, 88%)"); // #d9f99d
    ColorRegistry.register("Lime(300)", "hsl(75, 80%, 70%)"); // #bef264
    ColorRegistry.register("Lime(400)", "hsl(75, 80%, 58%)"); // #a3e635
    ColorRegistry.register("Lime(500)", "hsl(75, 70%, 48%)"); // #84cc16
    ColorRegistry.register("Lime(600)", "hsl(75, 70%, 40%)"); // #65a30d
    ColorRegistry.register("Lime(700)", "hsl(75, 70%, 34%)"); // #4d7c0f
    ColorRegistry.register("Lime(800)", "hsl(75, 70%, 28%)"); // #3f6212
    ColorRegistry.register("Lime(900)", "hsl(75, 70%, 21%)"); // #365314
    ColorRegistry.register("Lime(950)", "hsl(75, 70%, 10%)"); // #1a2e0d

    // Tailwind Green
    ColorRegistry.register("Green(50)", "hsl(152, 69%, 97%)"); // #f0fdf4
    ColorRegistry.register("Green(100)", "hsl(150, 70%, 91%)"); // #dcfce7
    ColorRegistry.register("Green(200)", "hsl(148, 65%, 83%)"); // #bbf7d0
    ColorRegistry.register("Green(300)", "hsl(146, 55%, 71%)"); // #86efac
    ColorRegistry.register("Green(400)", "hsl(144, 45%, 60%)"); // #4ade80
    ColorRegistry.register("Green(500)", "hsl(142, 43%, 50%)"); // #22c55e
    ColorRegistry.register("Green(600)", "hsl(141, 43%, 42%)"); // #16a34a
    ColorRegistry.register("Green(700)", "hsl(140, 45%, 34%)"); // #15803d
    ColorRegistry.register("Green(800)", "hsl(139, 51%, 27%)"); // #166534
    ColorRegistry.register("Green(900)", "hsl(137, 58%, 19%)"); // #14532d
    ColorRegistry.register("Green(950)", "hsl(136, 50%, 11%)"); // #052e16

    // Tailwind Emerald
    ColorRegistry.register("Emerald(50)", "hsl(162, 69%, 96%)"); // #f0fdf4
    ColorRegistry.register("Emerald(100)", "hsl(163, 67%, 90%)"); // #dcfce7
    ColorRegistry.register("Emerald(200)", "hsl(164, 60%, 82%)"); // #bbf7d0
    ColorRegistry.register("Emerald(300)", "hsl(166, 53%, 72%)"); // #86efac
    ColorRegistry.register("Emerald(400)", "hsl(167, 45%, 61%)"); // #4ade80
    ColorRegistry.register("Emerald(500)", "hsl(168, 43%, 51%)"); // #22c55e
    ColorRegistry.register("Emerald(600)", "hsl(168, 42%, 43%)"); // #16a34a
    ColorRegistry.register("Emerald(700)", "hsl(168, 43%, 36%)"); // #15803d
    ColorRegistry.register("Emerald(800)", "hsl(168, 43%, 28%)"); // #166534
    ColorRegistry.register("Emerald(900)", "hsl(168, 42%, 20%)"); // #14532d
    ColorRegistry.register("Emerald(950)", "hsl(168, 42%, 11%)"); // #052e16

    // Tailwind Teal
    ColorRegistry.register("Teal(50)", "hsl(174, 100%, 97%)"); // #f0fdfa
    ColorRegistry.register("Teal(100)", "hsl(174, 100%, 92%)"); // #ccfbf1
    ColorRegistry.register("Teal(200)", "hsl(174, 80%, 78%)"); // #6ee7b7
    ColorRegistry.register("Teal(300)", "hsl(174, 70%, 65%)"); // #34d399
    ColorRegistry.register("Teal(400)", "hsl(174, 60%, 54%)"); // #10b981
    ColorRegistry.register("Teal(500)", "hsl(174, 70%, 43%)"); // #059669
    ColorRegistry.register("Teal(600)", "hsl(174, 70%, 35%)"); // #047857
    ColorRegistry.register("Teal(700)", "hsl(174, 70%, 29%)"); // #065f46
    ColorRegistry.register("Teal(800)", "hsl(174, 70%, 23%)"); // #064e3b
    ColorRegistry.register("Teal(900)", "hsl(174, 70%, 17%)"); // #044e54
    ColorRegistry.register("Teal(950)", "hsl(174, 70%, 8%)"); // #022c22

    // Tailwind Cyan
    ColorRegistry.register("Cyan(50)", "hsl(182, 100%, 97%)"); // #ecfeff
    ColorRegistry.register("Cyan(100)", "hsl(182, 100%, 92%)"); // #cffafe
    ColorRegistry.register("Cyan(200)", "hsl(182, 80%, 78%)"); // #a5f3fc
    ColorRegistry.register("Cyan(300)", "hsl(182, 70%, 65%)"); // #67e8f9
    ColorRegistry.register("Cyan(400)", "hsl(182, 60%, 54%)"); // #22d3ee
    ColorRegistry.register("Cyan(500)", "hsl(182, 70%, 43%)"); // #06b6d4
    ColorRegistry.register("Cyan(600)", "hsl(182, 70%, 35%)"); // #0891b2
    ColorRegistry.register("Cyan(700)", "hsl(182, 70%, 29%)"); // #0e7490
    ColorRegistry.register("Cyan(800)", "hsl(182, 70%, 23%)"); // #155e75
    ColorRegistry.register("Cyan(900)", "hsl(182, 70%, 17%)"); // #164e63
    ColorRegistry.register("Cyan(950)", "hsl(182, 70%, 8%)"); // #083344

    // Tailwind Sky
    ColorRegistry.register("Sky(50)", "hsl(200, 100%, 98%)"); // #f0f9ff
    ColorRegistry.register("Sky(100)", "hsl(200, 100%, 94%)"); // #e0f2fe
    ColorRegistry.register("Sky(200)", "hsl(200, 100%, 88%)"); // #bae6fd
    ColorRegistry.register("Sky(300)", "hsl(200, 100%, 80%)"); // #7dd3fc
    ColorRegistry.register("Sky(400)", "hsl(200, 100%, 68%)"); // #38bdf8
    ColorRegistry.register("Sky(500)", "hsl(200, 100%, 58%)"); // #0ea5e9
    ColorRegistry.register("Sky(600)", "hsl(200, 90%, 45%)"); // #0284c7
    ColorRegistry.register("Sky(700)", "hsl(200, 90%, 34%)"); // #0369a1
    ColorRegistry.register("Sky(800)", "hsl(200, 90%, 27%)"); // #075985
    ColorRegistry.register("Sky(900)", "hsl(200, 90%, 19%)"); // #0c4a6e
    ColorRegistry.register("Sky(950)", "hsl(200, 90%, 8%)"); // #082f49

    // Tailwind Blue
    ColorRegistry.register("Blue(50)", "hsl(217, 100%, 97.8%)"); // #eff6ff
    ColorRegistry.register("Blue(100)", "hsl(217, 100%, 90%)"); // #dbeafe
    ColorRegistry.register("Blue(200)", "hsl(213, 95%, 82%)"); // #bfdbfe
    ColorRegistry.register("Blue(300)", "hsl(213, 90%, 72%)"); // #93c5fd
    ColorRegistry.register("Blue(400)", "hsl(213, 85%, 62%)"); // #60a5fa
    ColorRegistry.register("Blue(500)", "hsl(213, 80%, 52%)"); // #3b82f6
    ColorRegistry.register("Blue(600)", "hsl(213, 75%, 42%)"); // #2563eb
    ColorRegistry.register("Blue(700)", "hsl(213, 70%, 32%)"); // #1d4ed8
    ColorRegistry.register("Blue(800)", "hsl(213, 65%, 22%)"); // #1e40af
    ColorRegistry.register("Blue(900)", "hsl(213, 60%, 12%)"); // #1e3a8a
    ColorRegistry.register("Blue(950)", "hsl(213, 55%, 8%)"); // #172554

    // Tailwind Indigo
    ColorRegistry.register("Indigo(50)", "hsl(231, 100%, 98%)"); // #eef2ff
    ColorRegistry.register("Indigo(100)", "hsl(231, 100%, 94%)"); // #e0e7ff
    ColorRegistry.register("Indigo(200)", "hsl(231, 95%, 86%)"); // #c7d2fe
    ColorRegistry.register("Indigo(300)", "hsl(231, 90%, 76%)"); // #a5b4fc
    ColorRegistry.register("Indigo(400)", "hsl(231, 85%, 66%)"); // #818cf8
    ColorRegistry.register("Indigo(500)", "hsl(231, 80%, 56%)"); // #6366f1
    ColorRegistry.register("Indigo(600)", "hsl(231, 75%, 46%)"); // #4f46e5
    ColorRegistry.register("Indigo(700)", "hsl(231, 70%, 36%)"); // #4338ca
    ColorRegistry.register("Indigo(800)", "hsl(231, 65%, 26%)"); // #3730a3
    ColorRegistry.register("Indigo(900)", "hsl(231, 60%, 16%)"); // #312e81
    ColorRegistry.register("Indigo(950)", "hsl(231, 55%, 8%)"); // #1e1b4b

    // Tailwind Violet
    ColorRegistry.register("Violet(50)", "hsl(270, 100%, 98%)"); // #faf5ff
    ColorRegistry.register("Violet(100)", "hsl(270, 100%, 93.5%)"); // #f3e8ff
    ColorRegistry.register("Violet(200)", "hsl(270, 95%, 86%)"); // #e9d5ff
    ColorRegistry.register("Violet(300)", "hsl(270, 90%, 76%)"); // #d8b4fe
    ColorRegistry.register("Violet(400)", "hsl(270, 85%, 66%)"); // #c084fc
    ColorRegistry.register("Violet(500)", "hsl(270, 80%, 56%)"); // #a855f7
    ColorRegistry.register("Violet(600)", "hsl(270, 75%, 46%)"); // #9333ea
    ColorRegistry.register("Violet(700)", "hsl(270, 70%, 36%)"); // #7e22ce
    ColorRegistry.register("Violet(800)", "hsl(270, 65%, 26%)"); // #6b21a8
    ColorRegistry.register("Violet(900)", "hsl(270, 60%, 16%)"); // #581c87
    ColorRegistry.register("Violet(950)", "hsl(270, 55%, 8%)"); // #3b0764

    // Tailwind Purple
    ColorRegistry.register("Purple(50)", "hsl(270, 92.6%, 98%)"); // #faf5ff
    ColorRegistry.register("Purple(100)", "hsl(270, 97.9%, 93.5%)"); // #f3e8ff
    ColorRegistry.register("Purple(200)", "hsl(270, 94.9%, 86.3%)"); // #e9d5ff
    ColorRegistry.register("Purple(300)", "hsl(268, 89.1%, 76.7%)"); // #d8b4fe
    ColorRegistry.register("Purple(400)", "hsl(266, 78.7%, 66.7%)"); // #c084fc
    ColorRegistry.register("Purple(500)", "hsl(263, 66.3%, 55.5%)"); // #a855f7
    ColorRegistry.register("Purple(600)", "hsl(262, 55.9%, 45.9%)"); // #9333ea
    ColorRegistry.register("Purple(700)", "hsl(262, 47.3%, 39%)"); // #7e22ce
    ColorRegistry.register("Purple(800)", "hsl(261, 44.8%, 32.2%)"); // #6b21a8
    ColorRegistry.register("Purple(900)", "hsl(263, 40.8%, 24.3%)"); // #581c87
    ColorRegistry.register("Purple(950)", "hsl(265, 50%, 13.9%)"); // #3b0764

    // Tailwind Fuchsia
    ColorRegistry.register("Fuchsia(50)", "hsl(300, 100%, 98%)"); // #fdf4ff
    ColorRegistry.register("Fuchsia(100)", "hsl(300, 100%, 93%)"); // #fae8ff
    ColorRegistry.register("Fuchsia(200)", "hsl(300, 95%, 86%)"); // #f5d0fe
    ColorRegistry.register("Fuchsia(300)", "hsl(300, 90%, 76%)"); // #f0abfc
    ColorRegistry.register("Fuchsia(400)", "hsl(300, 85%, 66%)"); // #e879f9
    ColorRegistry.register("Fuchsia(500)", "hsl(300, 80%, 56%)"); // #d946ef
    ColorRegistry.register("Fuchsia(600)", "hsl(300, 75%, 46%)"); // #c026d3
    ColorRegistry.register("Fuchsia(700)", "hsl(300, 70%, 36%)"); // #a21caf
    ColorRegistry.register("Fuchsia(800)", "hsl(300, 65%, 26%)"); // #86198f
    ColorRegistry.register("Fuchsia(900)", "hsl(300, 60%, 16%)"); // #701a75
    ColorRegistry.register("Fuchsia(950)", "hsl(300, 55%, 8%)"); // #450a5e

    // Tailwind Pink
    ColorRegistry.register("Pink(50)", "hsl(340, 100%, 98%)"); // #fdf2f8
    ColorRegistry.register("Pink(100)", "hsl(340, 100%, 93%)"); // #fce7f3
    ColorRegistry.register("Pink(200)", "hsl(340, 95%, 86%)"); // #fbcfe8
    ColorRegistry.register("Pink(300)", "hsl(340, 90%, 76%)"); // #f9a8d4
    ColorRegistry.register("Pink(400)", "hsl(340, 85%, 66%)"); // #f472b6
    ColorRegistry.register("Pink(500)", "hsl(340, 80%, 56%)"); // #ec4899
    ColorRegistry.register("Pink(600)", "hsl(340, 75%, 46%)"); // #db2777
    ColorRegistry.register("Pink(700)", "hsl(340, 70%, 36%)"); // #be185d
    ColorRegistry.register("Pink(800)", "hsl(340, 65%, 26%)"); // #9d174d
    ColorRegistry.register("Pink(900)", "hsl(340, 60%, 16%)"); // #831843
    ColorRegistry.register("Pink(950)", "hsl(340, 55%, 8%)"); // #450634

    // Tailwind Rose
    ColorRegistry.register("Rose(50)", "hsl(0, 100%, 98%)"); // #fff1f2
    ColorRegistry.register("Rose(100)", "hsl(0, 100%, 93%)"); // #ffe4e6
    ColorRegistry.register("Rose(200)", "hsl(0, 95%, 86%)"); // #fecdd3
    ColorRegistry.register("Rose(300)", "hsl(0, 90%, 76%)"); // #fda4af
    ColorRegistry.register("Rose(400)", "hsl(0, 85%, 66%)"); // #fb7185
    ColorRegistry.register("Rose(500)", "hsl(0, 80%, 56%)"); // #f43f5e
    ColorRegistry.register("Rose(600)", "hsl(0, 75%, 46%)"); // #e11d48
    ColorRegistry.register("Rose(700)", "hsl(0, 70%, 36%)"); // #be123c
    ColorRegistry.register("Rose(800)", "hsl(0, 65%, 26%)"); // #9f1239
    ColorRegistry.register("Rose(900)", "hsl(0, 60%, 16%)"); // #881337
    ColorRegistry.register("Rose(950)", "hsl(0, 55%, 8%)"); // #450a30

    // Tailwind Gray
    ColorRegistry.register("Gray(50)", "hsl(210, 20%, 98%)"); // #f9fafb
    ColorRegistry.register("Gray(100)", "hsl(220, 14%, 97%)"); // #f3f4f6
    ColorRegistry.register("Gray(200)", "hsl(220, 13.5%, 92%)"); // #e5e7eb
    ColorRegistry.register("Gray(300)", "hsl(220, 13.3%, 85%)"); // #d1d5db
    ColorRegistry.register("Gray(400)", "hsl(220, 10.8%, 69%)"); // #9ca3af
    ColorRegistry.register("Gray(500)", "hsl(220, 8.3%, 55%)"); // #6b7280
    ColorRegistry.register("Gray(600)", "hsl(220, 6.7%, 44%)"); // #4b5563
    ColorRegistry.register("Gray(700)", "hsl(220, 5.6%, 35%)"); // #374151
    ColorRegistry.register("Gray(800)", "hsl(220, 4.4%, 25%)"); // #1f2937
    ColorRegistry.register("Gray(900)", "hsl(220, 3.5%, 15%)"); // #111827
    ColorRegistry.register("Gray(950)", "hsl(220, 2%, 8%)"); // #0f172a

    // Tailwind Slate
    ColorRegistry.register("Slate(50)", "hsl(210, 10%, 98%)"); // #f8fafc
    ColorRegistry.register("Slate(100)", "hsl(210, 10%, 95%)"); // #f1f5f9
    ColorRegistry.register("Slate(200)", "hsl(210, 10%, 90%)"); // #e2e8f0
    ColorRegistry.register("Slate(300)", "hsl(210, 10%, 80%)"); // #cbd5e1
    ColorRegistry.register("Slate(400)", "hsl(210, 10%, 68%)"); // #94a3b8
    ColorRegistry.register("Slate(500)", "hsl(210, 8%, 55%)"); // #64748b
    ColorRegistry.register("Slate(600)", "hsl(210, 7%, 44%)"); // #475569
    ColorRegistry.register("Slate(700)", "hsl(210, 6%, 35%)"); // #334155
    ColorRegistry.register("Slate(800)", "hsl(210, 5%, 25%)"); // #1e293b
    ColorRegistry.register("Slate(900)", "hsl(210, 4%, 15%)"); // #0f172a
    ColorRegistry.register("Slate(950)", "hsl(210, 3%, 8%)"); // #030712

    // Tailwind Zinc
    ColorRegistry.register("Zinc(50)", "hsl(210, 10%, 98%)"); // #fafafa
    ColorRegistry.register("Zinc(100)", "hsl(210, 10%, 95%)"); // #f4f4f5
    ColorRegistry.register("Zinc(200)", "hsl(210, 10%, 90%)"); // #e4e4e7
    ColorRegistry.register("Zinc(300)", "hsl(210, 10%, 80%)"); // #d4d4d8
    ColorRegistry.register("Zinc(400)", "hsl(210, 10%, 68%)"); // #a1a1aa
    ColorRegistry.register("Zinc(500)", "hsl(210, 8%, 55%)"); // #71717a
    ColorRegistry.register("Zinc(600)", "hsl(210, 7%, 44%)"); // #52525b
    ColorRegistry.register("Zinc(700)", "hsl(210, 6%, 35%)"); // #3f3f46
    ColorRegistry.register("Zinc(800)", "hsl(210, 5%, 25%)"); // #27272a
    ColorRegistry.register("Zinc(900)", "hsl(210, 4%, 15%)"); // #18181b
    ColorRegistry.register("Zinc(950)", "hsl(210, 3%, 8%)"); // #070707

    // Tailwind Neutral
    ColorRegistry.register("Neutral(50)", "hsl(210, 10%, 98%)"); // #fafafa
    ColorRegistry.register("Neutral(100)", "hsl(210, 10%, 95%)"); // #f5f5f5
    ColorRegistry.register("Neutral(200)", "hsl(210, 10%, 90%)"); // #e5e5e5
    ColorRegistry.register("Neutral(300)", "hsl(210, 10%, 80%)"); // #d4d4d8
    ColorRegistry.register("Neutral(400)", "hsl(210, 10%, 68%)"); // #a1a1aa
    ColorRegistry.register("Neutral(500)", "hsl(210, 8%, 55%)"); // #737373
    ColorRegistry.register("Neutral(600)", "hsl(210, 7%, 44%)"); // #525252
    ColorRegistry.register("Neutral(700)", "hsl(210, 6%, 35%)"); // #404040
    ColorRegistry.register("Neutral(800)", "hsl(210, 5%, 25%)"); // #262626
    ColorRegistry.register("Neutral(900)", "hsl(210, 4%, 15%)"); // #171717
    ColorRegistry.register("Neutral(950)", "hsl(210, 3%, 8%)"); // #0f0f0f

    // Tailwind Stone
    ColorRegistry.register("Stone(50)", "hsl(210, 10%, 98%)"); // #fafaf9
    ColorRegistry.register("Stone(100)", "hsl(210, 10%, 95%)"); // #f5f5f4
    ColorRegistry.register("Stone(200)", "hsl(210, 10%, 90%)"); // #e7e5e4
    ColorRegistry.register("Stone(300)", "hsl(210, 10%, 80%)"); // #d6d3d1
    ColorRegistry.register("Stone(400)", "hsl(210, 10%, 68%)"); // #a8a29e
    ColorRegistry.register("Stone(500)", "hsl(210, 8%, 55%)"); // #78716c
    ColorRegistry.register("Stone(600)", "hsl(210, 7%, 44%)"); // #57534e
    ColorRegistry.register("Stone(700)", "hsl(210, 6%, 35%)"); // #44403c
    ColorRegistry.register("Stone(800)", "hsl(210, 5%, 25%)"); // #292524
    ColorRegistry.register("Stone(900)", "hsl(210, 4%, 15%)"); // #1c1917
    ColorRegistry.register("Stone(950)", "hsl(210, 3%, 8%)"); // #0c0a09
  }

  export function unregister() {
    // Tailwind Red
    ColorRegistry.unregister("Red(50)");
    ColorRegistry.unregister("Red(100)");
    ColorRegistry.unregister("Red(200)");
    ColorRegistry.unregister("Red(300)");
    ColorRegistry.unregister("Red(400)");
    ColorRegistry.unregister("Red(500)");
    ColorRegistry.unregister("Red(600)");
    ColorRegistry.unregister("Red(700)");
    ColorRegistry.unregister("Red(800)");
    ColorRegistry.unregister("Red(900)");
    ColorRegistry.unregister("Red(950)");

    // Tailwind Orange
    ColorRegistry.unregister("Orange(50)");
    ColorRegistry.unregister("Orange(100)");
    ColorRegistry.unregister("Orange(200)");
    ColorRegistry.unregister("Orange(300)");
    ColorRegistry.unregister("Orange(400)");
    ColorRegistry.unregister("Orange(500)");
    ColorRegistry.unregister("Orange(600)");
    ColorRegistry.unregister("Orange(700)");
    ColorRegistry.unregister("Orange(800)");
    ColorRegistry.unregister("Orange(900)");
    ColorRegistry.unregister("Orange(950)");

    // Tailwind Amber
    ColorRegistry.unregister("Amber(50)");
    ColorRegistry.unregister("Amber(100)");
    ColorRegistry.unregister("Amber(200)");
    ColorRegistry.unregister("Amber(300)");
    ColorRegistry.unregister("Amber(400)");
    ColorRegistry.unregister("Amber(500)");
    ColorRegistry.unregister("Amber(600)");
    ColorRegistry.unregister("Amber(700)");
    ColorRegistry.unregister("Amber(800)");
    ColorRegistry.unregister("Amber(900)");
    ColorRegistry.unregister("Amber(950)");

    // Tailwind Yellow
    ColorRegistry.unregister("Yellow(50)");
    ColorRegistry.unregister("Yellow(100)");
    ColorRegistry.unregister("Yellow(200)");
    ColorRegistry.unregister("Yellow(300)");
    ColorRegistry.unregister("Yellow(400)");
    ColorRegistry.unregister("Yellow(500)");
    ColorRegistry.unregister("Yellow(600)");
    ColorRegistry.unregister("Yellow(700)");
    ColorRegistry.unregister("Yellow(800)");
    ColorRegistry.unregister("Yellow(900)");
    ColorRegistry.unregister("Yellow(950)");

    // Tailwind Lime
    ColorRegistry.unregister("Lime(50)");
    ColorRegistry.unregister("Lime(100)");
    ColorRegistry.unregister("Lime(200)");
    ColorRegistry.unregister("Lime(300)");
    ColorRegistry.unregister("Lime(400)");
    ColorRegistry.unregister("Lime(500)");
    ColorRegistry.unregister("Lime(600)");
    ColorRegistry.unregister("Lime(700)");
    ColorRegistry.unregister("Lime(800)");
    ColorRegistry.unregister("Lime(900)");
    ColorRegistry.unregister("Lime(950)");

    // Tailwind Green
    ColorRegistry.unregister("Green(50)");
    ColorRegistry.unregister("Green(100)");
    ColorRegistry.unregister("Green(200)");
    ColorRegistry.unregister("Green(300)");
    ColorRegistry.unregister("Green(400)");
    ColorRegistry.unregister("Green(500)");
    ColorRegistry.unregister("Green(600)");
    ColorRegistry.unregister("Green(700)");
    ColorRegistry.unregister("Green(800)");
    ColorRegistry.unregister("Green(900)");
    ColorRegistry.unregister("Green(950)");

    // Tailwind Emerald
    ColorRegistry.unregister("Emerald(50)");
    ColorRegistry.unregister("Emerald(100)");
    ColorRegistry.unregister("Emerald(200)");
    ColorRegistry.unregister("Emerald(300)");
    ColorRegistry.unregister("Emerald(400)");
    ColorRegistry.unregister("Emerald(500)");
    ColorRegistry.unregister("Emerald(600)");
    ColorRegistry.unregister("Emerald(700)");
    ColorRegistry.unregister("Emerald(800)");
    ColorRegistry.unregister("Emerald(900)");
    ColorRegistry.unregister("Emerald(950)");

    // Tailwind Teal
    ColorRegistry.unregister("Teal(50)");
    ColorRegistry.unregister("Teal(100)");
    ColorRegistry.unregister("Teal(200)");
    ColorRegistry.unregister("Teal(300)");
    ColorRegistry.unregister("Teal(400)");
    ColorRegistry.unregister("Teal(500)");
    ColorRegistry.unregister("Teal(600)");
    ColorRegistry.unregister("Teal(700)");
    ColorRegistry.unregister("Teal(800)");
    ColorRegistry.unregister("Teal(900)");
    ColorRegistry.unregister("Teal(950)");

    // Tailwind Cyan
    ColorRegistry.unregister("Cyan(50)");
    ColorRegistry.unregister("Cyan(100)");
    ColorRegistry.unregister("Cyan(200)");
    ColorRegistry.unregister("Cyan(300)");
    ColorRegistry.unregister("Cyan(400)");
    ColorRegistry.unregister("Cyan(500)");
    ColorRegistry.unregister("Cyan(600)");
    ColorRegistry.unregister("Cyan(700)");
    ColorRegistry.unregister("Cyan(800)");
    ColorRegistry.unregister("Cyan(900)");
    ColorRegistry.unregister("Cyan(950)");

    // Tailwind Sky
    ColorRegistry.unregister("Sky(50)");
    ColorRegistry.unregister("Sky(100)");
    ColorRegistry.unregister("Sky(200)");
    ColorRegistry.unregister("Sky(300)");
    ColorRegistry.unregister("Sky(400)");
    ColorRegistry.unregister("Sky(500)");
    ColorRegistry.unregister("Sky(600)");
    ColorRegistry.unregister("Sky(700)");
    ColorRegistry.unregister("Sky(800)");
    ColorRegistry.unregister("Sky(900)");
    ColorRegistry.unregister("Sky(950)");

    // Tailwind Blue
    ColorRegistry.unregister("Blue(50)");
    ColorRegistry.unregister("Blue(100)");
    ColorRegistry.unregister("Blue(200)");
    ColorRegistry.unregister("Blue(300)");
    ColorRegistry.unregister("Blue(400)");
    ColorRegistry.unregister("Blue(500)");
    ColorRegistry.unregister("Blue(600)");
    ColorRegistry.unregister("Blue(700)");
    ColorRegistry.unregister("Blue(800)");
    ColorRegistry.unregister("Blue(900)");
    ColorRegistry.unregister("Blue(950)");

    // Tailwind Indigo
    ColorRegistry.unregister("Indigo(50)");
    ColorRegistry.unregister("Indigo(100)");
    ColorRegistry.unregister("Indigo(200)");
    ColorRegistry.unregister("Indigo(300)");
    ColorRegistry.unregister("Indigo(400)");
    ColorRegistry.unregister("Indigo(500)");
    ColorRegistry.unregister("Indigo(600)");
    ColorRegistry.unregister("Indigo(700)");
    ColorRegistry.unregister("Indigo(800)");
    ColorRegistry.unregister("Indigo(900)");
    ColorRegistry.unregister("Indigo(950)");

    // Tailwind Violet
    ColorRegistry.unregister("Violet(50)");
    ColorRegistry.unregister("Violet(100)");
    ColorRegistry.unregister("Violet(200)");
    ColorRegistry.unregister("Violet(300)");
    ColorRegistry.unregister("Violet(400)");
    ColorRegistry.unregister("Violet(500)");
    ColorRegistry.unregister("Violet(600)");
    ColorRegistry.unregister("Violet(700)");
    ColorRegistry.unregister("Violet(800)");
    ColorRegistry.unregister("Violet(900)");
    ColorRegistry.unregister("Violet(950)");

    // Tailwind Purple
    ColorRegistry.unregister("Purple(50)");
    ColorRegistry.unregister("Purple(100)");
    ColorRegistry.unregister("Purple(200)");
    ColorRegistry.unregister("Purple(300)");
    ColorRegistry.unregister("Purple(400)");
    ColorRegistry.unregister("Purple(500)");
    ColorRegistry.unregister("Purple(600)");
    ColorRegistry.unregister("Purple(700)");
    ColorRegistry.unregister("Purple(800)");
    ColorRegistry.unregister("Purple(900)");
    ColorRegistry.unregister("Purple(950)");

    // Tailwind Fuchsia
    ColorRegistry.unregister("Fuchsia(50)");
    ColorRegistry.unregister("Fuchsia(100)");
    ColorRegistry.unregister("Fuchsia(200)");
    ColorRegistry.unregister("Fuchsia(300)");
    ColorRegistry.unregister("Fuchsia(400)");
    ColorRegistry.unregister("Fuchsia(500)");
    ColorRegistry.unregister("Fuchsia(600)");
    ColorRegistry.unregister("Fuchsia(700)");
    ColorRegistry.unregister("Fuchsia(800)");
    ColorRegistry.unregister("Fuchsia(900)");
    ColorRegistry.unregister("Fuchsia(950)");

    // Tailwind Pink
    ColorRegistry.unregister("Pink(50)");
    ColorRegistry.unregister("Pink(100)");
    ColorRegistry.unregister("Pink(200)");
    ColorRegistry.unregister("Pink(300)");
    ColorRegistry.unregister("Pink(400)");
    ColorRegistry.unregister("Pink(500)");
    ColorRegistry.unregister("Pink(600)");
    ColorRegistry.unregister("Pink(700)");
    ColorRegistry.unregister("Pink(800)");
    ColorRegistry.unregister("Pink(900)");
    ColorRegistry.unregister("Pink(950)");

    // Tailwind Rose
    ColorRegistry.unregister("Rose(50)");
    ColorRegistry.unregister("Rose(100)");
    ColorRegistry.unregister("Rose(200)");
    ColorRegistry.unregister("Rose(300)");
    ColorRegistry.unregister("Rose(400)");
    ColorRegistry.unregister("Rose(500)");
    ColorRegistry.unregister("Rose(600)");
    ColorRegistry.unregister("Rose(700)");
    ColorRegistry.unregister("Rose(800)");
    ColorRegistry.unregister("Rose(900)");
    ColorRegistry.unregister("Rose(950)");

    // Tailwind Gray
    ColorRegistry.unregister("Gray(50)");
    ColorRegistry.unregister("Gray(100)");
    ColorRegistry.unregister("Gray(200)");
    ColorRegistry.unregister("Gray(300)");
    ColorRegistry.unregister("Gray(400)");
    ColorRegistry.unregister("Gray(500)");
    ColorRegistry.unregister("Gray(600)");
    ColorRegistry.unregister("Gray(700)");
    ColorRegistry.unregister("Gray(800)");
    ColorRegistry.unregister("Gray(900)");
    ColorRegistry.unregister("Gray(950)");

    // Tailwind Slate
    ColorRegistry.unregister("Slate(50)");
    ColorRegistry.unregister("Slate(100)");
    ColorRegistry.unregister("Slate(200)");
    ColorRegistry.unregister("Slate(300)");
    ColorRegistry.unregister("Slate(400)");
    ColorRegistry.unregister("Slate(500)");
    ColorRegistry.unregister("Slate(600)");
    ColorRegistry.unregister("Slate(700)");
    ColorRegistry.unregister("Slate(800)");
    ColorRegistry.unregister("Slate(900)");
    ColorRegistry.unregister("Slate(950)");

    // Tailwind Zinc
    ColorRegistry.unregister("Zinc(50)");
    ColorRegistry.unregister("Zinc(100)");
    ColorRegistry.unregister("Zinc(200)");
    ColorRegistry.unregister("Zinc(300)");
    ColorRegistry.unregister("Zinc(400)");
    ColorRegistry.unregister("Zinc(500)");
    ColorRegistry.unregister("Zinc(600)");
    ColorRegistry.unregister("Zinc(700)");
    ColorRegistry.unregister("Zinc(800)");
    ColorRegistry.unregister("Zinc(900)");
    ColorRegistry.unregister("Zinc(950)");

    // Tailwind Neutral
    ColorRegistry.unregister("Neutral(50)");
    ColorRegistry.unregister("Neutral(100)");
    ColorRegistry.unregister("Neutral(200)");
    ColorRegistry.unregister("Neutral(300)");
    ColorRegistry.unregister("Neutral(400)");
    ColorRegistry.unregister("Neutral(500)");
    ColorRegistry.unregister("Neutral(600)");
    ColorRegistry.unregister("Neutral(700)");
    ColorRegistry.unregister("Neutral(800)");
    ColorRegistry.unregister("Neutral(900)");
    ColorRegistry.unregister("Neutral(950)");

    // Tailwind Stone
    ColorRegistry.unregister("Stone(50)");
    ColorRegistry.unregister("Stone(100)");
    ColorRegistry.unregister("Stone(200)");
    ColorRegistry.unregister("Stone(300)");
    ColorRegistry.unregister("Stone(400)");
    ColorRegistry.unregister("Stone(500)");
    ColorRegistry.unregister("Stone(600)");
    ColorRegistry.unregister("Stone(700)");
    ColorRegistry.unregister("Stone(800)");
    ColorRegistry.unregister("Stone(900)");
    ColorRegistry.unregister("Stone(950)");
  }
}
