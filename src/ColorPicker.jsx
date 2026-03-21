
export default function ColorPicker({color, setColor}) {

return (
    <div className="flex flex-col items-center gap-4 ">
    <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-24 h-12 cursor-pointer"
    />
    <p className="text-white">Picked color: {color}</p>
    </div>
)
}