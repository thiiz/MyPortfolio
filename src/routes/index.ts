interface NavRoutesProps {
  dictionary: {
    home: string | null;
    works: string;
    about_me: string;
    contacts: string;
  }
}

export const navRoutes = ({ dictionary }: NavRoutesProps) => {
  const routes = [
    { href: '/', text: dictionary.home, targetSegment: null },
    { href: '/works', text: dictionary.works, targetSegment: 'works' },
    { href: '/about', text: dictionary.about_me, targetSegment: 'about' },
    { href: '/contacts', text: dictionary.contacts, targetSegment: 'contacts' },
  ]
  return { routes }
}