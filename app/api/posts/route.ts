export async function GET() {
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );
  
    const data = await res.json();
  
    const posts = data.records.map((record: any) => ({
      id: record.id,
      title: record.fields.title,
      excerpt: record.fields.excerpt,
      image: record.fields.image?.[0]?.url,
      date: record.fields.date,
    }));
  
    return Response.json(posts);
  }