import {useEffect, useState} from 'react'

export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);

    // useEffect(함수, dependency 배열)
    // => 2번 째 인자인 dependency가 변할 떄 마다, 첫 번째 인자인 함수를 실행한다.
    useEffect(() => {
        const timeoutId = setInterval(() => {
            // setShowText(showText => {
            //     return !showText
            // })
            setShowText(showText => !showText);
        }, 1000)
        return () => {
            clearInterval(timeoutId)
        }
    }, [])

    return (
        <div>
            {showText? text: null}
        </div>
    )
}