import { supabase } from '../../../config/supabaseClientt';
import { NextApiRequest, NextApiResponse } from 'next';

const id = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id }, body } = req;

  if (method === 'GET') {
    const response = await supabase.from('tasks').select('*').eq('id', id)
    if (response.error) res.send({ error: 'something went wrong' })
    res.json(response)
  }
  if (method === 'DELETE') {
    const response = await supabase.from('tasks').delete().eq('id', id)
    if (response.error) res.send({ error: 'something went wrong' })
    res.json({ message: "Task Deleted" })
  }
  if (method === 'PUT') {
    if (body === 'pending' || body === 'completed') {
      const response = await supabase.from('tasks').update({ 'status': body }).eq('id', id)
      if (response.error) res.send({ error: 'something went wrong' })
      res.json({ message: "Task Updated" })
    } else {
      const response = await supabase.from('tasks').update({ 'tasktext': body }).eq('id', id)
      if (response.error) res.send({ error: 'something went wrong' })
      res.json({ message: "Task Updated" })
    }
  }
}

export default id;