import React from "react";

import Link from "next/link";

const TheAdminContent = () => {
  return (
    <main>
      <section>
        <Link href="/admin/news">Новости</Link>
      </section>
    </main>
  );
};

export default TheAdminContent;
