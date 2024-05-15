interface Props {
    text: string;
    color: string;
}

export default function ReactButton({ text, color }: Props) {
    return (
        <button
            className={`m-2 px-6 py-3 rounded-lg text-2xl transition duration-400 ${color}`}
        >
            {text}
        </button>
    );
}
