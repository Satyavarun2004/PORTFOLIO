interface Props {
  title: string;
  description: string;
  tech: string;
}

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{tech}</small>
    </div>
  );
}
