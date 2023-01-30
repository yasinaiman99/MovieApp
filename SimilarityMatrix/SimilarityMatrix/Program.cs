//using System;
//using System.Linq;

//namespace SimilarityMatrix
//{
//	class Program
//	{
//		static void Main(string[] args)
//		{
//			int[,] data = {
//				{1, 2, 3},
//				{4, 5, 6},
//				{7, 8, 9}
//			};

//			int rows = data.GetLength(0);
//			int columns = data.GetLength(1);

//			double[,] similarity = new double[rows, rows];

//			for (int i = 0; i < rows; i++)
//			{
//				for (int j = i; j < rows; j++)
//				{
//					if (i == j)
//					{
//						similarity[i, j] = 1;
//						continue;
//					}

//					int dotProduct = 0;
//					int magnitudeA = 0;
//					int magnitudeB = 0;

//					for (int k = 0; k < columns; k++)
//					{
//						dotProduct += data[i, k] * data[j, k];
//						magnitudeA += data[i, k] * data[i, k];
//						magnitudeB += data[j, k] * data[j, k];
//					}

//					similarity[i, j] = dotProduct / (Math.Sqrt(magnitudeA) * Math.Sqrt(magnitudeB));
//					similarity[j, i] = similarity[i, j];
//				}
//			}

//			Console.WriteLine("Similarity Matrix:");
//			for (int i = 0; i < rows; i++)
//			{
//				for (int j = 0; j < rows; j++)
//				{
//					Console.Write("{" + similarity[i, j] + "}" + ",");
//				}
//				Console.WriteLine();
//			}
//		}
//	}
//}


using System;

namespace SimilarityMatrix
{
	class Program
	{
		static void Main(string[] args)
		{
			int[,] ratings = new int[3, 3]
			{
				{ 5, 4, 3 },
				{ 4, 5, 2 },
				{ 3, 2, 5 }
			};

			int users = ratings.GetLength(0);
			double[,] similarity = new double[users, users];

			for (int i = 0; i < users; i++)
			{
				for (int j = 0; j < users; j++)
				{
					if (i == j)
					{
						similarity[i, j] = 1.0;
					}
					else
					{
						int sum = 0;
						for (int k = 0; k < users; k++)
						{
							sum += ratings[i, k] + ratings[j, k];
						}
						similarity[i, j] = 1.0 / (sum + 1);
					}
				}
			}

			Console.WriteLine("Similarity Matrix:");
			for (int i = 0; i < users; i++)
			{
				for (int j = 0; j < users; j++)
				{
					Console.Write(similarity[i, j] + " ");
				}
				Console.WriteLine();
			}
		}
	}
}
