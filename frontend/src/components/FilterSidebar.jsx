import { FilterGroup } from './FilterGroup';

export const FilterSidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      <FilterGroup 
        title="Marca" 
        inputType="checkbox" 
        options={[
          { text: "Adiddas", value: "opt1" },
          { text: "Calenciaga" },
          { text: "K-Swiss" },
          { text: "Nike" },
          { text: "Puma" },
        ]} 
      />
      <FilterGroup 
        title="Categoria" 
        inputType="checkbox" 
        options={[
          { text: "Esporte e lazer" },
          { text: "Casual" },
          { text: "Utilitário" },
          { text: "Corrida" },
        ]} 
      />
      <FilterGroup 
        title="Gênero" 
        inputType="checkbox" 
        options={[{ text: "Masculino" }, { text: "Feminino" }, { text: "Unissex" }]} 
      />
      <FilterGroup 
        title="Estado" 
        inputType="radio" 
        options={[{ text: "Novo" }, { text: "Usado" }]} 
      />
    </div>
  );
};