type Params = {
    params: { repid: string };
  };
  
  export default function RepStatsPage({ params }: Params) {
    const { repid } = params;
  
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Rep ID: {repid}</h1>
        <p>This is where stats will go for rep #{repid}.</p>
      </div>
    );
  }
  