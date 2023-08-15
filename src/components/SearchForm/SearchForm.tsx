import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';

type SearchFormProps = {
  onSubmit: (searchText: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setState(value.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(state);
    setState('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        value={state}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <Button type="submit" disabled={!state}>
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
