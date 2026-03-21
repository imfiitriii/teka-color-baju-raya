export default function handler(req, res) {
  // secret color hidden from frontend
    const SECRET_COLOR = { r: 87, g: 35, b: 99 }
    const guess = req.body // receives { r, g, b } from frontend

    // calculate distance
    const distance = Math.sqrt(
        (guess.r - SECRET_COLOR.r) ** 2 +
        (guess.g - SECRET_COLOR.g) ** 2 +
        (guess.b - SECRET_COLOR.b) ** 2
    )

    if (distance < 132) { //70% accuracy
        res.status(200).json({ win: true, link: "https://links.tngdigital.com.my/moneypacket/1n6wegsJuwk22dEOBWyw" })
    } else {
        res.status(200).json({ win: false })
    }
}