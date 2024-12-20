'use client';

import { useState } from 'react';
import * as z from 'zod';
import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { UserRound } from 'lucide-react';

// Definindo o esquema de validação com Zod
const schema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  apelido: z.string().min(1, { message: 'Apelido é obrigatório' }),
  estado: z.string().min(1, { message: 'Estado é obrigatório' }),
  cidade: z.string().min(1, { message: 'Cidade é obrigatória' }),
  documento: z.string().min(1, { message: 'Documento é obrigatório' }),
  dataNascimento: z
    .string()
    .min(1, { message: 'Data de Nascimento é obrigatória' }),
  genero: z.string().min(1, { message: 'Gênero é obrigatório' }),
  celular: z.string().min(1, { message: 'Celular é obrigatório' }),
  codigo: z.string().min(1, { message: 'Código é obrigatório' }),
});

export default function EditPage() {
  // Estado para armazenar os dados do formulário e erros
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    estado: '',
    cidade: '',
    documento: '',
    dataNascimento: '',
    genero: '',
    celular: '',
    codigo: '',
  });

  const [formErrors, setFormErrors] = useState<any>({});

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validando os dados do formulário usando Zod
    try {
      schema.parse(formData);
      // Se não houver erros, podemos prosseguir com o envio dos dados
      console.log('Dados enviados:', formData);
      setFormErrors({});
    } catch (error: any) {
      // Se houver erros, atualiza o estado de erros
      const newErrors: any = {};
      error.errors.forEach((err: any) => {
        newErrors[err.path[0]] = err.message;
      });
      setFormErrors(newErrors);
    }
  };

  // Função para lidar com a mudança dos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mt-20 flex flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />
      <main className="h-full w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        {/* Primeiro Card */}
        <Card
          icon={<UserRound size={24} />}
          title="Info. de contato"
          className="mb-8 h-full max-w-[825px]"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Nome</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
                {formErrors.nome && (
                  <p className="text-xs text-red-700">{formErrors.nome}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Apelido</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="apelido"
                  value={formData.apelido}
                  onChange={handleChange}
                />
                {formErrors.apelido && (
                  <p className="text-xs text-red-700">{formErrors.apelido}</p>
                )}
              </div>
            </div>

            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Estado</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                />
                {formErrors.estado && (
                  <p className="text-xs text-red-700">{formErrors.estado}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Cidade</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
                {formErrors.cidade && (
                  <p className="text-xs text-red-700">{formErrors.cidade}</p>
                )}
              </div>
            </div>

            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Documento</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                />
                {formErrors.documento && (
                  <p className="text-xs text-red-700">{formErrors.documento}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Data de Nascimento
                  </span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                />
                {formErrors.dataNascimento && (
                  <p className="text-xs text-red-700">
                    {formErrors.dataNascimento}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Genero</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                />
                {formErrors.genero && (
                  <p className="text-xs text-red-700">{formErrors.genero}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Celular</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                />
                {formErrors.celular && (
                  <p className="text-xs text-red-700">{formErrors.celular}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="h-[42px] w-[165px] rounded-none text-[12px]"
              >
                SALVAR DADOS
              </Button>
            </div>
          </form>
        </Card>

        {/* Segundo Card */}
        <Card
          title="Cambiar datos de acceso"
          showIcon={false}
          className="h-full max-w-[825px]"
        >
          <Label className="text-xs">Código</Label>
          <Input
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
          />
          {formErrors.codigo && (
            <p className="text-xs text-red-700">{formErrors.codigo}</p>
          )}
          <div className="mt-7 flex items-center justify-center">
            <Button
              className="h-[40px] w-[200px] rounded-none bg-black text-xs font-bold"
              disabled
            >
              CHECAR CÓDIGO
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
