// app/dashboard/page.tsx
import { getAllComments, getLatestUsers } from '@/lib/db';

export default async function DashboardPage() {
  const comments = await getAllComments();
  const users = await getAllComments() //getLatestUsers();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Комментарии</h2>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="border p-2 rounded">{c.comment}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Пользователи</h2>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="border p-2 rounded">{u.comment}</li>
        ))}
      </ul>
    </div>
  );
}
