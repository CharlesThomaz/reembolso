import { Button } from "./Button"
import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"


type Props = {
    current: number
    total: number
    onPrevious:()=>void
     onNext:()=>void
}

export function Pagination({ current, total, onPrevious, onNext }: Props) {
    return (
        <div className=" flex flex-1 gap-4 justify-center items-center">
            <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
                <img src={leftSvg} alt="icone de voltar" />
            </Button>
            <span className="text-sm text-gray-200">{current}/{total}</span>
            <Button variant="iconSmall" onClick={onNext} disabled={current === 10}>
                <img src={rightSvg} alt="icone de avançar" />
            </Button>
        </div>
    )
}