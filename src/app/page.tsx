import SellOfList from '@/components/account/List/SellOfList';
import NotLoggedNotification from '@/components/auth/notification/NotLoggedNotification';
import CategoryFilter from '@/components/category/Filter';
import CategoryList from '@/components/category/List/CategoryList';
import { GeneralInformationBar } from '@/components/information/Bar';
import Banner from '@/components/media/Banner';
import TopSellerList from '@/components/seller/List/TopSellerList';
import Breadcrumbs from '@/components/share/Breadcrumbs';

export default function Home() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[{ title: 'Home', href: '/' }, { title: 'Page' }]}
      />
      <div className='my-2 flex flex-col lg:flex-row gap-4'>
        <div className='shrink-0 w-full lg:w-[240px]'>
          <GeneralInformationBar />
        </div>
        <div className='flex flex-col gap-7 overflow-hidden'>
          <div className='flex flex-col gap-3'>
            <NotLoggedNotification />
            <Banner />
          </div>
          <CategoryList />
          <TopSellerList />
          <CategoryFilter />
          <SellOfList />
        </div>
      </div>
    </>
  );
}
