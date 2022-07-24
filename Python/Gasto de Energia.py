gasto_de_energia = []
contas = []
for i in range(12):
    gasto_de_energia.append(float(input(f"Digite o gasto de energia no mês {i+1}: ")))
    if gasto_de_energia[i] > 525:
        contas.append((gasto_de_energia[i] * 1.4929) + 298.58)
    else:
        contas.append(gasto_de_energia[i] * 1.4929)

print("----Relatorio-----")
for i in range(len(contas)):
    print(f"Conta do mês {i+1}°: R${contas[i]:.2f} ")
    if i in range(0,2):
        if gasto_de_energia[i] >= 450:
            print(f"O mês {i+1}° atingiu a meta!")
    if i in range(2,7):
        if gasto_de_energia[i] >= 320:
            print(f"O mês {i+1}° atingiu a meta!")
    if i in range(7,12):
        if gasto_de_energia[i] >= 360:
            print(f"O mês {i+1}° atingiu a meta!")
    if i == 12:
        if gasto_de_energia[i] >= 600:
            print(f"O mês {i+1}° atingiu a meta!") 