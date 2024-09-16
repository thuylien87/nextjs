import { AuthorField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function Form({ authors }: { authors: AuthorField[] }) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* author Name */}
        <div className="mb-4">
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Choose author
          </label>
          <div className="relative">
            <select
              id="author"
              name="authorId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a author
              </option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.full_name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/books"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Book</Button>
      </div>
    </form>
  );
}
