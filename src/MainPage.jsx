import { useState } from 'react'
import ColorPicker from './ColorPicker'



export default function MainPage() {

    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.replace("#", ""), 16)
        const r = (bigint >> 16) & 255
        const g = (bigint >> 8) & 255
        const b = bigint & 255
        return { r, g, b }
    }
    const [result, setResult] = useState(null)
    const [color, setColor] = useState("#ff0000")

    async function submitColor(){
    const rgb = hexToRgb(color)
        try {
        const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rgb),
        })
        const data = await res.json()
        setResult(data) // { win: true, qr: "RM5_VOUCHER_CODE" } or { win: false }
    } catch (err) {
        alert("Error submitting color:", err.message)
    }
}

return (
    <div className="bg-gray-900 overflow-hidden min-h-screen">
    <div className="relative isolate px-6 pt-0 lg:px-8">
        <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        <div
            style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
        </div>
        <div className="mx-auto max-w-2xl py-22 sm:py-48 lg:py-56">
            <div className="text-center">
            <h1 className="text-7xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Teka Color Baju Raya Aku
            </h1>
            <p className="mt-8 text-lg pb-5 font-medium text-pretty text-gray-400 sm:text-x1/8">
            Teka color baju raya aku, kalau 92.5% accurate dapat duit raya RM2 :D (nanti akan ada button)
            </p>
            <ColorPicker color={color} setColor={setColor}/>
            <div className="mt-10 flex items-center justify-center gap-x-6">

                <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={submitColor}> Submit</button>
            {/* result */}
            {result && (
                <p className="text-white">{result.win ? <a 
                    className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    href={result.link}>nah tekan ni, shr!</a> : "Not the color!"}</p>
            )}
            </div>
            </div>
        </div>
        <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
            <div
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
        </div>
        </div>
    </div>
)
}


