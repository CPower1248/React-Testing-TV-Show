import react from "react"
import { render, screen } from "@testing-library/react"
import Episodes from "./Episodes"

test("Episodes.js renders without errors", () => {
    render(<Episodes />)
})