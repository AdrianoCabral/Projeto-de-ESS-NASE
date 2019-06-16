Feature: Gerência de relatório
As a Coordenador
I want to gerar e atualizar relatórios dos atendimentos dos profissionais, e também realizar análises dos dados dos relatórios, comparando profissionais diferentes ou grupos de profissionais
So that Eu possa avaliar os dados dos atendimentos e ter uma visão mais amplo da condição de saúde dos alunos da faculdade.

Scenario: gerar novo relatório de um profissional e visualizar estatísticas
Given eu estou na pagina Relatórios
Given eu vejo o profissional “Paulo Ricardo” especializado em “Psicologia” na lista de profissionais
Given o relatório atual de “Paulo ricardo” especializado em “Psicologia” diz que ele realizou “10” atendimentos, com “0” faltas,a porcentagem de pessoas do sexo Masculino atendida foi de “25.00%”, a porcentagem de pessoas do sexo Feminino atendida foi de “75.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”
When eu seleciono a opção “visualizar” do profissional “Paulo Ricardo” especializado em “psicologia”
Then eu vejo o profissional “Paulo ricardo” especializado em “Psicologia” realizou “10” atendimentos, com “0” faltas,a porcentagem de pessoas do sexo Masculino atendida foi de “25.00%”, a porcentagem de pessoas do sexo Feminino atendida foi de “75.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”

Scenario: tentando acessar os relatórios sem estar logado como “coordenador”
Given eu estou logado como “recepcionista”
And eu estou na página “Inicial”
When eu seleciono a opção “Relatórios”
Then eu vejo uma mensagem de erro

Scenario comparando relatórios de profissionais diferentes
Given eu estou na página de Relatórios
And eu posso ver que o profissional “Paulo Ricardo” especializado em “Psicologia” fez “49” atendimentos, teve “0” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “63.27%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “36.73%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “8.33%”, “8.33%”, “6.25%”, “6.25%”, “4.17%”And: no relatório do profissional “Miranda Mourão” especializado em “Ortopedia” consta que ele realizou “10” atendimentos, com “0” faltas,  “100.00%”, a porcentagem de pessoas do sexo “Masculino” atendida foi de “25.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “75.00%”, os 5 cursos mais atendidos foram “Direito - Bacharelado”, “Física - Licenciatura “, “Geografia - Licenciatura “Engenharia Química - Bacharelado”, “Medicina - Bacharelado” com participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”
When eu seleciono o profissional “Paulo Ricardo” especializado em “Psicologia” na lista de profissionais
And eu seleciono o profissional “Miranda Mourão” especializado em “Ortopedia”
And eu seleciono a opção “Comparar Relatórios”
Then eu posso ver que o profissional “Miranda Mourão” especializado em “Ortopedia” consta que ele realizou “10” atendimentos, com “0” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “25.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “75.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”
And eu posso ver que o profissional “Paulo Ricardo” especializado em “Psicologia” fez “49” atendimentos, teve “0” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “63.27%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “36.73%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “8.33%”, “8.33%”, “6.25%”, “6.25%”, “4.17%”

Scenario: gerando relatório conjunto um grupo de profissionais
Given eu estou na página de Relatórios
And no relatório do profissional “Miranda Mourão” especializado em “Ortopedia” consta que ele realizou “10” atendimentos, com “0” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “30.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “70.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”
And no relatório do profissional “Marcela Araújo” especializado em “Ortopedia” consta que ele realizou “10” atendimentos, com “2” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “50.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “50.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “40.00%”, “10.00%”, “10.00%”, “20.00%”, “20.00%”
And no relatório do profissional “Kimio Terapia” especializado em “Ortopedia” consta que ele realizou “10” atendimentos, com “5” faltas, a porcentagem de pessoas do sexo “Masculino” atendida foi de “40.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “60.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “20.00%”, “20.00%”, “20.00%”, “20.00%”, “20.00%”
When eu seleciono o profissional “Kimio Terapia” especializado em “Ortopedia” na lista de profissionais
And eu seleciono o profissional “Marcela Araújo” especializado em “Ortopedia” na lista de profissionais
And eu seleciono o profissional “Miranda Mourão” especializado em “Ortopedia” na lista de profissionais
And eu seleciono a opção “Gerar relatório conjunto”
Then eu posso ver que os profissionais “Kimio Terapia”, “Marcela Araújo”, “Miranda Mourão” especializados respectivamente em “Ortopedia”, “Ortopedia”, “Ortopedia”, realizaram “30” atendimentos, com “7” faltas,  “83.33%”, a porcentagem de pessoas do sexo “Masculino” atendida foi de “40.00%”, a porcentagem de pessoas do sexo “Feminino” atendida foi de “60.00%”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “26.66%”, “16.66%”, “16.66%”, “20.00%”, “20.00%”