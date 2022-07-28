import { supabase } from '../../../config/supabaseClientt';

const index = async (req: any, res: any) => {
  const { method, body } = req;

  if (method === 'GET') {
    const response = await supabase.from('tasks').select('*')
    if (response.error) res.send({ error: 'something went wrong' })
    res.json(response)
  }
  if (method === 'POST') {
    const response = await supabase.from('tasks').insert([
      { ...JSON.parse(body) }
    ])
    if (response.error) res.send({ error: 'something went wrong' })
    res.json({ message: 'task created' })
  }
}

export default index;

