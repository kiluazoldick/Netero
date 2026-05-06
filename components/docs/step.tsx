import CodeBlock from "./codeblock";

type Props = {
  step: string;
  title: string;
  code: string;
};

export default function Step({ step, title, code }: Props) {
  return (
    <div className="mb-6">
      <p className="text-xs text-[#FFD700] uppercase mb-1">{step}</p>
      <h3 className="text-sm text-gray-300 mb-2">{title}</h3>
      <CodeBlock code={code} />
    </div>
  );
}