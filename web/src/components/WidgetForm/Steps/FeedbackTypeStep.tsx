import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep ({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
          <span className="text-xl leading-6">Deixe seu feedback</span>

          <CloseButton />
        </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
            key={key} //Precisamos passar a key de cada elemento que sera renderizado. BUG, IDEA, OTHER.
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            //Em eventos como onClick, onSubmit, devemos passar uma função. Uma função, deve ser acompanhada de uma arrow function para só ser executada quando for efetuado o evento(onClick). Não deve se passar somente "setFeedbackType()" pois seria a execução de uma função e não a função em si.
            type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
            );
          }) }
      </div>
    </>

  );
}