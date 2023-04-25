interface YoutubeProps {
  id: string
  title: string
}

export default function Youtube({ id, title }: YoutubeProps) {
  return (
    <iframe
      className="mt-6 aspect-[16/9] w-full rounded-lg"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}
