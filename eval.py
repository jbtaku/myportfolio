import lib
import torch
from torchvision import transforms
from torch.utils.data import DataLoader
import torch.nn as nn

device = "cuda" if torch.cuda.is_available() else "cpu"
num_batch = 1
transforms = transforms.ToTensor()
dataset = lib.Mydataset(root = "img/test/", transforms = transforms)
dataloader = DataLoader(dataset=dataset, batch_size=num_batch, shuffle=True)
model = lib.CNN().to(device)
model.load_state_dict(torch.load('model.pth'))
model.eval()
loss_sum = 0
correct = 0
criterion = nn.CrossEntropyLoss()

with torch.no_grad():
    for inputs, labels in dataloader:
        inputs = inputs.to(device)
        labels = labels.to(device)
        outputs = model(inputs)

        loss_sum += criterion(outputs, labels)
        pred = outputs.argmax(1)
        if pred.eq(labels.view_as(pred)).sum().item():
            correct += 1

print(f"Loss: {loss_sum.item() / len(dataloader)}, Accuracy: {100*correct/len(dataset)}% ({correct}/{len(dataset)})")
