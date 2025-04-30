type props = {
  question: string
}

export default function Accordion({ question }: props) {
  return (
    <div className='flex justify-between bg-offWhite p-3 px-4  rounded-xl mb-2'>
      <div>{question}</div>
      <span className="text-2xl">+</span>
    </div>
  );
}


