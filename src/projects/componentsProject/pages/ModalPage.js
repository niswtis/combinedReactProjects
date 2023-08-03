import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary rounded onClick={closeModalHandler}>
      Close Modal
    </Button>
  );

  const modal = (
    <Modal closeModal={closeModalHandler} actionBar={actionBar}>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa tempus, tempus nisl eget, pharetra eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non suscipit erat. Aenean vitae porttitor velit. Nunc nec urna in risus eleifend iaculis. Sed quis magna turpis. Donec eu magna finibus, fermentum neque sed, auctor libero. Integer ornare sagittis augue, vitae bibendum sem auctor eget. Nullam euismod imperdiet ipsum ac pulvinar. Nunc tempus odio iaculis, ultricies lacus eget, tempor erat. Aliquam fringilla velit vel tempus euismod. Pellentesque a risus turpis. Vestibulum vehicula dolor eu urna facilisis, nec congue sem sagittis. Curabitur velit turpis, lacinia sagittis rutrum sit amet, eleifend lobortis felis. Donec et libero non tellus venenatis accumsan non eget velit. Proin eu tempus orci, vitae semper nibh.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={openModalHandler}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
