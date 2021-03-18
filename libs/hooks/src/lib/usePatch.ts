import { useQuery } from 'react-query';

const getPatchById = async (id: string) => {
  const response = await fetch(`/api/fmx/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching patch');
  }
  return response.json();
};

export function usePatch(id: string) {
  return useQuery(['patch', id], () => getPatchById(id));
}
