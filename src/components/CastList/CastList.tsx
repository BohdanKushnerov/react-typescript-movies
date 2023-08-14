import { CreditsList, CreditsItem, Name } from './CastList.styled';

type CastProps = {
  state: CastItem[];
};

type CastItem = {
  id: number;
  name: string;
  profile_path: string;
};

const CastList: React.FC<CastProps> = ({ state }) => {
  return (
    <CreditsList>
      {state.map(({ profile_path, name, id }) => {
        return (
          <CreditsItem key={id}>
            <img src={profile_path} alt={name} width={138} height={175} />
            <Name>{name}</Name>
          </CreditsItem>
        );
      })}
    </CreditsList>
  );
};

export default CastList;
