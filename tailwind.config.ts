
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated Cyberpunk theme colors
				anime: {
					midnight: '#1a1a2e',
					crimson: '#c4161c',
					teal: '#0f9b8e',
					amber: '#e6af2e',
					text: '#f7f7f7',
					purple: '#8B5CF6',
					magenta: '#D946EF',
					orange: '#F97316',
					blue: '#00FFFF',  // Electric blue
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'title-reveal': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(1.2)', opacity: '0.5' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)', opacity: '0.5' },
					'50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)', opacity: '1' },
					'100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)', opacity: '0.5' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-15px) rotate(2deg)' },
					'50%': { transform: 'translateY(-25px) rotate(-1deg)' },
					'75%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'particles': {
					'0%': { transform: 'translateY(0) rotate(0)', opacity: '0' },
					'50%': { transform: 'translateY(-50vh) rotate(180deg)', opacity: '0.7' },
					'100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' }
				},
				'scroll-hint': {
					'0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
					'50%': { transform: 'translateY(5px)', opacity: '1' }
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'power-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0', boxShadow: '0 0 0 rgba(0, 255, 255, 0)' },
					'50%': { transform: 'scale(1.05)', opacity: '0.7', boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
					'100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }
				},
				'border-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '300% 0%' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out forwards',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out forwards',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'title-reveal': 'title-reveal 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards',
				'pulse-glow': 'pulse-glow 3s infinite',
				'float': 'float 15s ease-in-out infinite',
				'particles': 'particles 20s linear infinite',
				'scroll-hint': 'scroll-hint 1.5s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite',
				'power-up': 'power-up 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards',
				'border-flow': 'border-flow 8s linear infinite',
				'glitch': 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
			},
			backgroundImage: {
				'hero-pattern': "url('/bg-pattern.png')",
				'circuit-pattern': "url('/circuit-bg.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
