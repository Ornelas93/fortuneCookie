import React, { useState } from "react";

import { Button, InputGroup, Input, InputRightElement } from '@chakra-ui/react';

function BiscoitoInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        value={show ? "A vida trará coisas boas se tiveres paciência" : ""}
      />
      <InputRightElement width="8rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Fecha Biscoito" : "Abre Biscoito"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default BiscoitoInput;