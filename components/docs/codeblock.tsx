type Props = {
  code: string;
};

export default function CodeBlock({ code }: Props) {
  return (
    <pre className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}