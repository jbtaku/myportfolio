import lib
import torch
from torchvision import transforms
from torch.utils.data import DataLoader
import torch.nn as nn

num_epochs = 200
num_batch = 50
learning_rate = 0.001
device = "cuda" if torch.cuda.is_available() else "cpu"

transforms = transforms.ToTensor()
dataset = lib.Mydataset(root = "img/train/", transforms = transforms)
dataloader = DataLoader(dataset=dataset, batch_size=num_batch, shuffle=True)

model = lib.CNN().to(device)

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr = learning_rate)

model.train()

for epoch in range(num_epochs):
    loss_sum = 0

    for inputs, labels in dataloader:
        inputs = inputs.to(device)
        labels = labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss_sum += loss
        loss.backward()
        optimizer.step()
        
    print(f"Epoch: {epoch+1}/{num_epochs}, Loss: {loss_sum.item() / len(dataloader)}")
    with open("loss.txt", "a") as f:
        f.write(str(loss_sum.item() / len(dataloader))+ "\n")

    torch.save(model.state_dict(), "model.pth")

