import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

export default function AllUsers() {
  const { toast } = useToast();

  const { data: users, isLoading, isError: isErrorUsers } = useGetUsers();

  if (isErrorUsers) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !users ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {users?.documents.map((user) => (
              <li key={user?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={user} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
