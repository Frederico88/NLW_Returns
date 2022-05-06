import { CloseButton } from "../CloseButton"
import { useState } from "react";

import bugImagrUrl from "../../assets/bug.svg";
import ideaImagrUrl from "../../assets/idea.svg";
import thoughtImagrUrl from "../../assets/thought.svg";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";



export const feedbackTypes = {
    BUG:
    {
        title: 'Problema',
        image: {
            source: bugImagrUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA:
    {
        title: 'Ideia',
        image: {
            source: ideaImagrUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:
    {
        title: 'Outro',
        image: {
            source: thoughtImagrUrl,
            alt: 'Imagem de uma nuvem pensando'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedBackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com carinho por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/fredericorezendec/">Frederico</a>.
            </footer>
        </div>
    )
}