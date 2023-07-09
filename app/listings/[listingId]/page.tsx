import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingId from '@/app/actions/getListingById';

import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';

import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';

interface IParams {
  listingId?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const listing = await getListingId(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
