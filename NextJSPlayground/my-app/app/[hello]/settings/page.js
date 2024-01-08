const { useParams } = require("next/navigation");

export default function SettingsPage() {
  const params = useParams();

  return (
    <div>
      <p>This is page of {params.hello}</p>
    </div>
  );
}
