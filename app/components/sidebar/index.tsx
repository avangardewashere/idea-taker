import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="bg-sky-900 w-48 h-screen p-4">
      <ul className=" flex flex-col list-none">
        <li className="">
			<Link href="/readlist">Read List</Link>
		</li>
        <li>Add Items</li>
      </ul>
    </div>
  );
};

export default Sidebar;
