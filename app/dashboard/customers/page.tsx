import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const params = await props.searchParams;
  const customers = await fetchFilteredCustomers(params?.query ?? "");

  return <CustomersTable customers={customers} />;
}
