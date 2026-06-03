// ===================================================================
// Função serverless da Vercel — proxy seguro para as APIs da NASA.
// A chave fica na variável de ambiente NASA_API_KEY (secreta, no painel
// da Vercel) e NUNCA é enviada ao navegador.
//
// Uso pelo front-end:
//   /api/nasa?type=apod                  -> imagem astronômica do dia
//   /api/nasa?type=search&q=orion+nebula -> busca imagens reais (Hubble/JWST)
// ===================================================================

export default async function handler(req, res) {
  const KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
  const { type = 'apod', q = '' } = req.query;

  // cache de borda: a NASA não muda a cada segundo; aliviamos a API e
  // ganhamos velocidade. (1h no cliente, 1 dia na borda da Vercel)
  res.setHeader('Cache-Control', 's-maxage=86400, max-age=3600');

  try {
    let url;
    if (type === 'apod') {
      // Astronomy Picture of the Day (precisa da chave)
      url = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;
    } else if (type === 'search') {
      // NASA Image Library — busca de imagens reais (não usa a chave)
      url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image`;
    } else if (type === 'exoplanets') {
      // NASA Exoplanet Archive (TAP/SQL) — sistemas com planetas reais.
      // Pega os mais próximos da Terra, que têm dados de tamanho e órbita.
      const sql = "select pl_name,hostname,sy_dist,pl_rade,pl_orbper,disc_year,sy_pnum"
        + " from ps where default_flag=1 and sy_dist is not null and pl_rade is not null"
        + " order by sy_dist asc";
      url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${encodeURIComponent(sql)}&format=json`;
    } else {
      return res.status(400).json({ error: 'type inválido (use apod, search ou exoplanets)' });
    }

    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).json({ error: 'falha ao consultar a NASA' });
    const data = await r.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
